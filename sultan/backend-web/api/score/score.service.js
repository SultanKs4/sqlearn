const createResponseObject = require("../../lib/createResponseObject");
const { hashPassword } = require("../../lib/hashPassword");
const Schedule = require("../schedule/schedule.model");
const ClassModel = require("../class/class.model");
const Score = require("./score.model");
const Student = require("../student/student.model");
const Class = require("../class/class.model");
const Question = require("../question/question.model");
const Session = require("../session/session.model");
const errorHandling = require("../../lib/errorHandling");
const createHttpError = require("http-errors");
const LogSessionStudent = require("../log-session-student/log-session-student.model");

module.exports = {
    getAllByStudent: async (user, kelas = null) => {
        try {
            let whereKelas = {};
            if (kelas) {
                whereKelas = {
                    id: kelas,
                };
            }
            const scores = await Score.findAll({
                attributes: ["score"],
                include: [
                    {
                        model: Schedule,
                        attributes: ["start_date", "description"],
                        include: [
                            {
                                attributes: ["id", "name"],
                                model: ClassModel,
                                as: "classes",
                                include: [
                                    {
                                        attributes: [],
                                        model: Student,
                                        as: "students",
                                        where: {
                                            id: user.id,
                                        },
                                        through: { attributes: [] },
                                    },
                                ],
                                where: whereKelas,
                                through: { attributes: [] },
                            },
                        ],
                    },
                ],
                where: {
                    student_id: user.id,
                },
                raw: true,
                nest: true,
            });

            const scoresResponse = scores.reduce((acc, curr) => {
                if (curr["Schedule"]["start_date"]) {
                    const score = curr["score"];
                    const schedule = curr["Schedule"]["description"];
                    const start_date = curr["Schedule"]["start_date"];
                    const className = curr["Schedule"]["classes"]["name"];
                    const obj = {
                        className,
                        schedule,
                        start_date,
                        score,
                    };
                    acc = [...acc, obj];
                }
                return acc;
            }, []);
            // const scoresResponse = scores.map(val => {
            //     if (val['Schedule']['start_date']) {
            //         const score = val['score']
            //         const schedule = val['Schedule']['description']
            //         const start_date = val['Schedule']['start_date']
            //         const className = val['Schedule']['classes']['name']
            //         return {
            //             className,
            //             schedule,
            //             start_date,
            //             score
            //         }
            //     }
            // })

            return createResponseObject(true, "Data nilai berhasil didapatkan", scoresResponse);
        } catch (error) {
            return errorHandling(error);
        }
    },

    getAllByDosen: async (kelas, jadwal) => {
        try {
            const scores = await Score.findAll({
                attributes: ["id", "student_id", "schedule_id", "score"],
                include: [
                    {
                        model: Schedule,
                        attributes: [],
                        include: [
                            {
                                model: Class,
                                attributes: [],
                                as: "classes",
                                where: {
                                    id: kelas,
                                },
                                through: { attributes: [] },
                            },
                        ],
                        where: {
                            id: jadwal,
                        },
                    },
                    {
                        model: Student,
                        attributes: ["id", "nim", "name"],
                    },
                ],
                raw: true,
                nest: true,
            });

            return createResponseObject(true, "Data nilai berhasil didapatkan", scores);
        } catch (error) {
            return errorHandling(error);
        }
    },

    getOne: async (student, schedule) => {
        try {
            const studentDb = await Student.findByPk(student);
            if (!studentDb) throw createHttpError(404, "data student not found");
            const scheduleDb = await Schedule.findByPk(schedule);
            if (!scheduleDb) throw createHttpError(404, "data schedule not found");
            const answer = await Question.findAll({
                include: [
                    {
                        model: LogSessionStudent,
                        required: true,
                        include: [
                            {
                                model: Session,
                                attributes: [],
                                include: [
                                    {
                                        model: Schedule,
                                        attributes: [],
                                    },
                                    {
                                        model: Student,
                                        attributes: [],
                                    },
                                ],
                                where: {
                                    student_id: student,
                                    schedule_id: schedule,
                                },
                            },
                        ],
                    },
                ],
            });
            return createResponseObject(true, "Data pertanyaan berhasil didapatkan", {
                student: studentDb,
                schedule: scheduleDb,
                answer,
            });
        } catch (error) {
            return errorHandling(error);
        }
    },
};
