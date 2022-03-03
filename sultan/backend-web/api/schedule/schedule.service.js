const { Op } = require("sequelize");
const createResponseObject = require("../../lib/createResponseObject");
const Class = require("../class/class.model");
const Container = require("../container/container.model");
const Question = require("../question/question.model");
const Score = require("../score/score.model");
const Session = require("../session/session.model");
const Student = require("../student/student.model");
const Schedule = require("./schedule.model");

module.exports = {
    getAll: async (user, query = null) => {
        try {
            let whereSchedule = {};
            if (query.start && query.finish) {
                whereSchedule[Op.and] = [
                    { start: { [Op.gte]: new Date(query.start) } },
                    { finish: { [Op.lte]: new Date(query.finish) } },
                ];
            } else if (query.start) {
                whereSchedule.finish = { [Op.gte]: new Date(query.start) };
            } else {
                whereSchedule.finish = { [Op.gte]: new Date() };
            }

            let whereKelas = {};
            if (query.kelas) whereKelas.id = query.kelas;

            const schedules = await Schedule.findAll({
                include: [
                    {
                        model: Class,
                        as: "classes",
                        where: {
                            ...whereKelas,
                            user_id: user.id,
                        },
                        // through: {
                        //     where: whereKelas
                        // }
                    },
                    {
                        model: Container,
                        attributes: ["id", "description"],
                    },
                ],
                where: whereSchedule,
                order: [["createdAt", "DESC"]],
            });
            if (!schedules || schedules.length == 0) throw new Error("data schedule not found");

            const scheduleResponse = schedules.reduce((acc, curr) => {
                curr.classes.map((val) => {
                    acc = [
                        ...acc,
                        {
                            id: curr.id,
                            description: curr.description,
                            total_questions: curr.total_questions,
                            class: {
                                id: val.id,
                                name: val.name,
                            },
                            container: {
                                id: curr.Container.id,
                                description: curr.Container.description,
                            },
                            type: curr.type,
                            start: curr.start,
                            finish: curr.finish,
                        },
                    ];
                });
                return acc;
            }, []);

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

    getAllForStudents: async (user) => {
        try {
            const student = await Student.findByPk(user.id, {
                include: [
                    {
                        model: Class,
                        as: "classes",
                        attributes: ["id"],
                        through: { attributes: [] },
                    },
                ],
            });
            if (!student) throw new Error("data student not found");

            const scores = await Score.findAll({
                attributes: ["schedule_id"],
                where: {
                    student_id: user.id,
                },
                raw: true,
            });

            const existedScores = scores.map((score) => score.schedule_id);

            const sessions = await Session.findAll({
                attributes: ["schedule_id"],
                where: {
                    student_id: user.id,
                    is_finished: false,
                },
                raw: true,
            });

            const unfinishedSessions = sessions.map((session) => session.schedule_id);

            const studentClasses = student.classes.map((item) => item.id);

            const dateNow = new Date();
            const date = `${dateNow.getFullYear()}-${("0" + (dateNow.getMonth() + 1)).slice(-2)}-${(
                "0" + dateNow.getDate()
            ).slice(-2)}`;
            const time = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`;

            const schedules = await Schedule.findAll({
                include: {
                    model: Class,
                    as: "classes",
                    through: { attributes: [] },
                    where: {
                        id: {
                            [Op.in]: studentClasses,
                        },
                    },
                },
                where: {
                    id: {
                        [Op.notIn]: existedScores,
                    },
                    [Op.or]: {
                        [Op.and]: {
                            start_date: {
                                [Op.lte]: date,
                            },
                            finish_date: {
                                [Op.gte]: date,
                            },
                            [Op.and]: {
                                start_time: {
                                    [Op.lte]: time,
                                },
                                finish_time: {
                                    [Op.gte]: time,
                                },
                            },
                        },

                        id: {
                            [Op.in]: unfinishedSessions,
                        },
                    },
                },
            });
            return createResponseObject("success", "Data schedule berhasil didapatkan", schedules);
        } catch (error) {
            console.log(error);
            return createResponseObject("error", "Data schedule gagal didapatkan");
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
