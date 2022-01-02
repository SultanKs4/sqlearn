const { Op } = require("sequelize");
const createResponseObject = require("../../lib/createResponseObject");
const Class = require("../class/class.model");
const Container = require("../container/container.model");
const Score = require("../score/score.model");
const Session = require("../session/session.model");
const Student = require("../student/student.model");
const Schedule = require("./schedule.model");

module.exports = {
    getAll: async (user, query = null) => {
        try {
            console.log(query)
            const timeNow = new Date()
            const time = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`

            let whereSchedule = {}
            if (query.startDate && query.endDate) {
                const dateStart = new Date(query.startDate)
                const dateEnd = new Date(query.endDate)

                const startDate = `${dateStart.getFullYear()}-${("0" + (dateStart.getMonth() + 1)).slice(-2)}-${("0" + dateStart.getDate()).slice(-2)}`
                const finishDate = `${dateEnd.getFullYear()}-${("0" + (dateEnd.getMonth() + 1)).slice(-2)}-${("0" + dateEnd.getDate()).slice(-2)}`

                whereSchedule = {
                    ...whereSchedule,
                    [Op.and]: {
                        start_date: {
                            [Op.gte]: startDate
                        },
                        [Op.and]: {
                            finish_date: {
                                [Op.lte]: finishDate
                            }
                        }
                    }
                }
            } else if (query.startDate) {
                const dateNow = new Date(query.startDate)
                const date = `${dateNow.getFullYear()}-${("0" + (dateNow.getMonth() + 1)).slice(-2)}-${("0" + dateNow.getDate()).slice(-2)}`

                whereSchedule = {
                    ...whereSchedule,
                    finish_date: {
                        [Op.gte]: date
                    }
                }
            } else {
                const dateNow = new Date()
                const date = `${dateNow.getFullYear()}-${("0" + (dateNow.getMonth() + 1)).slice(-2)}-${("0" + dateNow.getDate()).slice(-2)}`

                whereSchedule = {
                    ...whereSchedule,
                    finish_date: {
                        [Op.gte]: date
                    }
                }
            }

            let whereKelas = {}
            if (query.kelas) {
                whereKelas = {
                    ...whereKelas,
                    id: query.kelas
                }
            }

            const schedules = await Schedule.findAll({
                include: [
                    {
                        model: Class,
                        as: "classes",
                        where: {
                            ...whereKelas,
                            user_id: user.id
                        },
                        // through: {
                        //     where: whereKelas
                        // }
                    },
                    {
                        model: Container,
                        attributes: ['id', 'description']
                    }
                ],
                where: whereSchedule,
                order: [['createdAt', 'DESC']]
            })

            const scheduleResponse = schedules.reduce((acc, curr) => {
                curr.classes.map(val => {
                    acc = [...acc, {
                        id: curr.id,
                        description: curr.description,
                        total_questions: curr.total_questions,
                        class: {
                            id: val.id,
                            name: val.name
                        },
                        container: {
                            id: curr.Container.id,
                            description: curr.Container.description
                        },
                        type: curr.type,
                        start_date: curr.start_date,
                        finish_date: curr.finish_date,
                        start_time: curr.start_time,
                        finish_time: curr.finish_time
                    }]
                })
                return acc
            }, [])

            return createResponseObject(true, "Data schedule berhasil didapatkan", scheduleResponse);
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data schedule gagal didapatkan");
        }
    },

    getAllForStudents: async (user) => {
        try {
            const student = await Student.findByPk(user.id, {
                include: [{
                    model: Class,
                    as: "classes",
                    attributes: ['id'],
                    through: { attributes: [] }
                }]
            })
            if (!student) return createResponseObject(false, "Data mahasiswa gagal didapatkan");

            const scores = await Score.findAll({
                attributes: ['schedule_id'],
                where: {
                    student_id: user.id
                },
                raw: true
            })

            const existedScores = scores.map(score => score.schedule_id)

            const sessions = await Session.findAll({
                attributes: ['schedule_id'],
                where: {
                    student_id: user.id,
                    is_finished: false
                },
                raw: true
            })

            const unfinishedSessions = sessions.map(session => session.schedule_id)

            const studentClasses = student.classes.map(item => item.id)

            const dateNow = new Date()
            const date = `${dateNow.getFullYear()}-${("0" + (dateNow.getMonth() + 1)).slice(-2)}-${("0" + dateNow.getDate()).slice(-2)}`
            const time = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`

            const schedules = await Schedule.findAll({
                include: {
                    model: Class,
                    as: "classes",
                    through: { attributes: [] },
                    where: {
                        id: {
                            [Op.in]: studentClasses
                        }
                    }
                },
                where: {
                    [Op.or]: {

                        [Op.and]: {
                            start_date: {
                                [Op.lte]: date
                            },
                            finish_date: {
                                [Op.gte]: date
                            },
                            [Op.and]: {
                                start_time: {
                                    [Op.lte]: time
                                },
                                finish_time: {
                                    [Op.gte]: time
                                },
                            }
                        },

                        id: {
                            [Op.in]: unfinishedSessions
                        }
                    },

                    id: {
                        [Op.notIn]: existedScores
                    }
                }
            })
            return createResponseObject(true, "Data schedule berhasil didapatkan", schedules);
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data schedule gagal didapatkan");
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
                        id: classId
                    }
                }
            })
            return createResponseObject(true, "Data schedule berhasil didapatkan", schedule)
        } catch (error) {
            console.error(error)
            return createResponseObject(false, "Data schedule gagal didapatkan");
        }
    },

    getOne: async (id) => {
        try {
            const schedule = await Schedule.findByPk(id)
            return createResponseObject(true, "Data schedule berhasil didapatkan", schedule)
        } catch (error) {
            console.error(error)
            return createResponseObject(false, "Data schedule gagal didapatkan");
        }
    },

    insert: async (data, user) => {
        try {
            let newSchedule = await Schedule.create({
                container_id: data.container_id,
                description: data.description,
                finish_date: data.finish_date,
                finish_time: data.finish_time,
                start_date: data.start_date,
                start_time: data.start_time,
                total_questions: data.total_questions,
                type: data.type,
                user_id: user.id
            })

            await newSchedule.setClasses(data.classes)

            return createResponseObject(true, "Data schedule berhasil ditambahkan", newSchedule)
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data schedule gagal ditambahkan")
        }
    },

    update: async (id, data) => {
        try {
            const schedule = await Schedule.findByPk(id)
            if (!schedule) return createResponseObject(false, "Tidak ada data schedule didapatkan");

            Object.keys(data).forEach(val => {
                schedule[val] = data[val]
            })

            await schedule.save()

            return createResponseObject(true, "Data schedule berhasil diperbarui", schedule);
        } catch (error) {
            return createResponseObject(false, "Data schedule gagal diperbarui");
        }
    },

    destroy: async (id) => {
        try {
            const schedule = await Schedule.findByPk(id)
            if (!schedule) return createResponseObject(false, "Tidak ada schedule yang dihapus")

            await Schedule.destroy({
                where: {
                    id
                }
            })

            return createResponseObject(true, "Data schedule berhasil dihapus")


        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data schedule gagal dihapus");
        }
    }

}