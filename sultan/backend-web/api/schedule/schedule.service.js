const { Op } = require("sequelize");
const createResponseObject = require("../../lib/createResponseObject");
const Class = require("../class/class.model");
const Container = require("../container/container.model");
const Question = require("../question/question.model");
const QuestionLabel = require("../questions-label/question-label.model");
const Score = require("../score/score.model");
const Session = require("../session/session.model");
const Student = require("../student/student.model");
const Schedule = require("./schedule.model");

async function getWhereDosen(query, userId) {
    let whereSchedule = {};
    if (query.start && query.finish) {
        whereSchedule[Op.and] = [
            { start: { [Op.gte]: new Date(query.start) } },
            { finish: { [Op.lte]: new Date(query.finish) } },
        ];
    } else if (query.start) whereSchedule.finish = { [Op.gte]: new Date(query.start) };
    else whereSchedule.finish = { [Op.gte]: new Date() };

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
    if (!student) throw new Error("data student not found");

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

module.exports = {
    getAll: async (user, query = null) => {
        try {
            let where = null;
            if (user.role == "dosen") {
                where = await getWhereDosen(query, user.id);
            } else if (user.role == "mahasiswa") {
                where = await getWhereStudent(user);
            } else {
                throw new Error("role not supported");
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
            if (!schedules || schedules.length == 0) throw new Error("data schedule not found");

            const scheduleResponse = schedules.map((val) => {
                let classData = val.classes.map((e) => {
                    return {
                        id: e.id,
                        name: e.name,
                    };
                });
                return {
                    id: val.id,
                    description: val.description,
                    total_questions: val.total_questions,
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
            });

            return createResponseObject("success", "Data schedule berhasil didapatkan", scheduleResponse);
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data schedule gagal didapatkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    getAllByClass: async (classId) => {
        try {
            const schedule = await Schedule.findAll({
                include: {
                    attributes: [],
                    model: Class,
                    as: "classes",
                    where: {
                        id: classId,
                    },
                },
            });
            if (!schedule || schedule.length == 0) throw new Error("schedule not found");
            return createResponseObject("success", "Data schedule berhasil didapatkan", schedule);
        } catch (error) {
            console.error(error);
            return createResponseObject(
                "error",
                "Data schedule gagal didapatkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    getOne: async (id) => {
        try {
            const schedule = await Schedule.findByPk(id);
            if (!schedule) throw new Error("data schedule not found");
            return createResponseObject("success", "Data schedule berhasil didapatkan", schedule);
        } catch (error) {
            console.error(error);
            return createResponseObject(
                "error",
                "Data schedule gagal didapatkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    insert: async (data, user) => {
        try {
            const container = await Container.findByPk(data.container_id);
            if (!container) throw new Error("data container not found");

            const total_questions = await Question.findAndCountAll({
                include: {
                    model: Container,
                    as: "containers",
                    where: {
                        id: data.container_id,
                    },
                },
            });

            for (const val of data.classes) {
                let classData = await Class.findOne({
                    where: {
                        id: val,
                        user_id: user.id,
                    },
                });
                if (!classData) throw new Error(`class id ${val} not found or class is not belong to ${user.name}`);
            }

            let newSchedule = await Schedule.create({
                container_id: container.id,
                description: data.description,
                start: data.start,
                finish: data.finish,
                total_questions: total_questions.count,
                type: data.type,
                user_id: user.id,
            });

            await newSchedule.setClasses(data.classes);

            return createResponseObject("success", "Data schedule berhasil ditambahkan", newSchedule);
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data schedule gagal ditambahkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    update: async (id, data, user) => {
        try {
            const schedule = await Schedule.findByPk(id);
            if (!schedule) throw new Error("Tidak ada data schedule didapatkan");

            const container = await Container.findByPk(data.container_id);
            if (!container) throw new Error("data container not found");

            const total_questions = await Question.findAndCountAll({
                include: {
                    model: Container,
                    as: "containers",
                    where: {
                        id: data.container_id,
                    },
                },
            });

            for (const val of data.classes) {
                let classData = await Class.findOne({
                    where: {
                        id: val,
                        user_id: user.id,
                    },
                });
                if (!classData) throw new Error(`class id ${val} not found or class is not belong to ${user.name}`);
            }

            let dataUpdate = {
                container_id: container.id,
                description: data.description,
                start: data.start,
                finish: data.finish,
                total_questions: total_questions.count,
                type: data.type,
                user_id: user.id,
            };

            Object.keys(dataUpdate).forEach((val) => {
                schedule[val] = dataUpdate[val];
            });
            await schedule.save();

            await schedule.setClasses([]);
            await schedule.setClasses(data.classes);

            return createResponseObject("success", "Data schedule berhasil diperbarui", schedule);
        } catch (error) {
            return createResponseObject(
                "error",
                "Data schedule gagal diperbarui",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    destroy: async (id) => {
        try {
            const schedule = await Schedule.findByPk(id);
            if (!schedule) throw new Error("schedule data not found");

            await Schedule.destroy({
                where: {
                    id,
                },
            });

            return createResponseObject("success", "Data schedule berhasil dihapus");
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data schedule gagal dihapus",
                error == null ? null : error.message ? error.message : error
            );
        }
    },
};
