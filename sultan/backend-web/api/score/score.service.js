const createResponseObject = require("../../lib/createResponseObject");
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
const Container = require("../container/container.model");
const QuestionLabel = require("../questions-label/question-label.model");

module.exports = {
    getAllByStudent: async (user, kelas = null) => {
        try {
            let whereKelas = {};
            if (kelas) whereKelas.id = kelas;
            const scores = await Score.findAll({
                attributes: ["score"],
                include: [
                    {
                        model: Schedule,
                        attributes: ["start", "description", "finish"],
                        include: [
                            {
                                model: ClassModel,
                                attributes: ["id", "name"],
                                as: "classes",
                                include: [
                                    {
                                        model: Student,
                                        attributes: [],
                                        as: "students",
                                        where: { id: user.id },
                                        through: { attributes: [] },
                                    },
                                ],
                                where: whereKelas,
                                through: { attributes: [] },
                            },
                            {
                                model: Container,
                                include: [{ model: QuestionLabel }],
                            },
                        ],
                    },
                ],
                where: {
                    student_id: user.id,
                },
            });

            if (scores.length == 0) throw createHttpError(404, "data score not found");

            const scoresResponse = await scores.reduce(async (prevScore, currScore) => {
                let arrScore = await prevScore;
                if (currScore.Schedule) {
                    let obj = {
                        class_name: currScore.Schedule.classes[0]["name"],
                        score: currScore.score,
                        schedule: {
                            description: currScore.Schedule.description,
                            start: currScore.Schedule.start,
                            finish: currScore.Schedule.finish,
                        },
                        total_questions: await currScore.Schedule.Container.countQuestions(),
                        label: currScore.Schedule.Container.QuestionLabel.name,
                    };
                    arrScore = [...arrScore, obj];
                }
                return arrScore;
            }, Promise.resolve([]));

            return createResponseObject(200, "success", "Data nilai berhasil didapatkan", scoresResponse);
        } catch (error) {
            return errorHandling(error);
        }
    },

    getAllByDosen: async (kelas, jadwal) => {
        try {
            const scores = await Score.findAll({
                attributes: ["id", "score"],
                include: [
                    {
                        model: Schedule,
                        attributes: ["description"],
                        include: [
                            {
                                model: Class,
                                attributes: ["name"],
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
            });

            await Promise.all(
                scores.map(async (e) => {
                    await e.Student.getClasses({ where: { id: kelas }, joinTableAttributes: [] }).then((data) => {
                        if (data.length == 0)
                            throw createHttpError(
                                500,
                                `student ${e.Student.name} not in class ${e.Schedule.classes[0].name}`
                            );
                    });
                })
            );

            return createResponseObject(200, "success", "Data nilai berhasil didapatkan", scores);
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
            return createResponseObject(200, "success", "Data pertanyaan berhasil didapatkan", {
                student: studentDb,
                schedule: scheduleDb,
                answer,
            });
        } catch (error) {
            return errorHandling(error);
        }
    },
};
