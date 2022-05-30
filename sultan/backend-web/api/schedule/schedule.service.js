const createHttpError = require("http-errors");
const { Op, Sequelize } = require("sequelize");
const createResponseObject = require("../../lib/createResponseObject");
const errorHandling = require("../../lib/errorHandling");
const CaseStudy = require("../case-study/case-study.model");
const Class = require("../class/class.model");
const Container = require("../container/container.model");
const Question = require("../question/question.model");
const QuestionLabel = require("../questions-label/question-label.model");
const Score = require("../score/score.model");
const Session = require("../session/session.model");
const Student = require("../student/student.model");
const User = require("../user/user.model");
const Schedule = require("./schedule.model");

async function getWhereDosen(query, userId) {
    let whereSchedule = {};
    if (query.start && query.finish) {
        whereSchedule[Op.and] = [
            { start: { [Op.gte]: new Date(query.start) } },
            { finish: { [Op.lte]: new Date(query.finish) } },
        ];
    } else if (query.start) whereSchedule.start = { [Op.gte]: new Date(query.start) };
    else if (query.finish) whereSchedule.finish = { [Op.lte]: new Date(query.finish) };
    else {
        let date = new Date();
        date.setDate(date.getDate() - 7);
        whereSchedule.finish = { [Op.gte]: date };
    }

    let whereClass = { user_id: userId };
    if (query.kelas) whereClass.id = query.kelas;

    return { whereSchedule, whereClass };
}

async function getWhereStudent(user) {
    const student = await Student.findByPk(user.id, {
        attributes: ["id"],
        include: [
            {
                model: Class,
                as: "classes",
                attributes: ["id"],
            },
        ],
    });

    const existedScores = await Score.findAll({
        attributes: ["schedule_id"],
        where: {
            student_id: user.id,
        },
        raw: true,
    }).then((scores) => {
        return scores.map((val) => val.schedule_id);
    });

    const unfinishedSessions = await Session.findAll({
        attributes: ["schedule_id"],
        where: {
            student_id: user.id,
            is_finished: false,
        },
        raw: true,
    }).then((sessions) => {
        return sessions.map((session) => session.schedule_id);
    });

    let whereSchedule = {
        id: {
            [Op.notIn]: existedScores,
        },
        [Op.or]: {
            finish: {
                [Op.gte]: new Date(),
            },
            id: {
                [Op.in]: unfinishedSessions,
            },
        },
    };

    let whereClass = {
        id: {
            [Op.in]: student.classes.map((item) => item.id),
        },
    };
    return { whereSchedule, whereClass };
}

function msToHMS(ms) {
    let seconds = ms / 1000;
    const hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
    seconds = seconds % 60;
    return hours + ":" + minutes + ":" + seconds;
}

module.exports = {
    getAll: async (user, query = null) => {
        try {
            let where = null;
            if (user.role == "dosen") {
                where = await getWhereDosen(query, user.id);
            } else if (user.role == "mahasiswa") {
                where = await getWhereStudent(user);
            }

            const schedules = await Schedule.findAll({
                include: [
                    {
                        model: Class,
                        as: "classes",
                        through: { attributes: [] },
                        where: where.whereClass,
                    },
                    {
                        model: Container,
                        attributes: ["id", "description", "label_id"],
                        include: [{ model: QuestionLabel, attributes: ["id", "name"] }],
                    },
                ],
                where: where.whereSchedule,
                order: [["createdAt", "DESC"]],
            });
            if (!schedules || schedules.length == 0) throw createHttpError(404, "data schedule not found");

            const scheduleResponse = await Promise.all(
                schedules.map(async (val) => {
                    let classData = val.classes.map((e) => {
                        return {
                            id: e.id,
                            name: e.name,
                        };
                    });
                    return {
                        id: val.id,
                        description: val.description,
                        total_questions: await val.Container.countQuestions(),
                        type: val.type,
                        start: val.start,
                        finish: val.finish,
                        class: classData,
                        container: {
                            id: val.Container.id,
                            description: val.Container.description,
                        },
                        label: {
                            id: val.Container.QuestionLabel.id,
                            name: val.Container.QuestionLabel.name,
                        },
                    };
                })
            );
            return createResponseObject(200, "success", "Data schedule berhasil didapatkan", scheduleResponse);
        } catch (error) {
            return errorHandling(error);
        }
    },

    getAllByClass: async (classId) => {
        try {
            const schedules = await Schedule.findAll({
                include: {
                    attributes: [],
                    model: Class,
                    as: "classes",
                    where: {
                        id: classId,
                    },
                },
            });
            if (!schedules || schedules.length == 0) throw createHttpError(404, "schedules not found");
            const data = [];
            for (const schedule of schedules) {
                let tmp = schedule.toJSON();
                tmp.total_questions = await Container.findByPk(schedule.container_id).then(async (data) => {
                    return await data.countQuestions();
                });
                data.push(tmp);
            }
            return createResponseObject(200, "success", "Data schedules berhasil didapatkan", data);
        } catch (error) {
            return errorHandling(error);
        }
    },

    getOne: async (id) => {
        try {
            const schedule = await Schedule.findByPk(id, {
                include: [
                    {
                        model: Container,
                        include: [
                            {
                                model: Question,
                                as: "questions",
                                attributes: ["id", "text"],
                                through: { attributes: [] },
                                include: [
                                    {
                                        model: CaseStudy,
                                        attributes: ["id", "name"],
                                    },
                                ],
                            },
                            {
                                model: QuestionLabel,
                                attributes: ["id", "name"],
                            },
                        ],
                        order: Sequelize.literal("rand()"),
                    },
                ],
            });
            if (!schedule) throw createHttpError(404, "data schedule not found");
            const data = schedule.toJSON();
            data.Container.total_questions = await schedule.Container.countQuestions();
            let ms = new Date(data.finish).getTime() - new Date(data.start).getTime();
            data.timer = msToHMS(ms);
            return createResponseObject(200, "success", "Data schedule berhasil didapatkan", data);
        } catch (error) {
            return errorHandling(error);
        }
    },

    insert: async (data, user) => {
        try {
            const container = await Container.findByPk(data.container_id);
            if (!container) throw createHttpError(404, "data container not found");

            for (const val of data.classes) {
                let classData = await Class.findOne({
                    where: {
                        id: val,
                        user_id: user.id,
                    },
                });
                if (!classData)
                    throw createHttpError(404, `class id ${val} not found or class is not belong to ${user.name}`);
            }

            let newSchedule = await Schedule.create({
                container_id: container.id,
                description: data.description,
                start: data.start,
                finish: data.finish,
                type: data.type,
                user_id: user.id,
            });

            await newSchedule.addClasses(data.classes);

            return createResponseObject(201, "success", "Data schedule berhasil ditambahkan", newSchedule);
        } catch (error) {
            return errorHandling(error);
        }
    },

    update: async (id, data, user) => {
        try {
            const schedule = await Schedule.findByPk(id);
            if (!schedule) throw createHttpError(404, "Tidak ada data schedule didapatkan");

            const container = await Container.findByPk(data.container_id);
            if (!container) throw createHttpError(404, "data container not found");

            for (const val of data.classes) {
                let classData = await Class.findOne({
                    where: {
                        id: val,
                        user_id: user.id,
                    },
                });
                if (!classData)
                    throw createHttpError(404, `class id ${val} not found or class is not belong to ${user.name}`);
            }

            let dataUpdate = {
                container_id: container.id,
                description: data.description,
                start: data.start,
                finish: data.finish,
                type: data.type,
                user_id: user.id,
            };

            Object.keys(dataUpdate).forEach((val) => {
                schedule[val] = dataUpdate[val];
            });
            await schedule.save();

            await schedule.setClasses([]);
            await schedule.setClasses(data.classes);

            return createResponseObject(200, "success", "Data schedule berhasil diperbarui", schedule);
        } catch (error) {
            return errorHandling(error);
        }
    },

    destroy: async (id) => {
        try {
            const schedule = await Schedule.findByPk(id);
            if (!schedule) throw createHttpError(404, "schedule data not found");

            await Schedule.destroy({
                where: {
                    id,
                },
            });

            return createResponseObject(200, "success", "Data schedule berhasil dihapus");
        } catch (error) {
            return errorHandling(error);
        }
    },
};
