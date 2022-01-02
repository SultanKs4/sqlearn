const createResponseObject = require("../../lib/createResponseObject");
const { hashPassword } = require("../../lib/hashPassword");
const Schedule = require("../schedule/schedule.model");
const ClassModel = require("../class/class.model");
const Score = require("./score.model");
const Student = require("../student/student.model");
const Class = require("../class/class.model");
const Question = require("../question/question.model");
const SessionStudentAnswer = require("../session-student-answer/session-student-answer.model");
const Session = require("../session/session.model");


module.exports = {
    getAllByStudent: async (user, kelas = null) => {
        try {
            let whereKelas = {}
            if (kelas) {
                whereKelas = {
                    id: kelas
                }
            }
            const scores = await Score.findAll({
                attributes: ['score'],
                include: [
                    {
                        model: Schedule,
                        attributes: ['start_date', 'description'],
                        include: [
                            {
                                attributes: ['id', 'name'],
                                model: ClassModel,
                                as: "classes",
                                include: [
                                    {
                                        attributes: [],
                                        model: Student,
                                        as: "students",
                                        where: {
                                            id: user.id
                                        },
                                        through: { attributes: [] }
                                    }
                                ],
                                where: whereKelas,
                                through: { attributes: [] }
                            }
                        ]
                    }
                ],
                where: {
                    student_id: user.id
                },
                raw: true,
                nest: true
            })

            const scoresResponse = scores.reduce((acc, curr) => {
                if (curr['Schedule']['start_date']) {
                    const score = curr['score']
                    const schedule = curr['Schedule']['description']
                    const start_date = curr['Schedule']['start_date']
                    const className = curr['Schedule']['classes']['name']
                    const obj = {
                        className,
                        schedule,
                        start_date,
                        score
                    }
                    acc = [...acc, obj]
                }
                return acc
            }, [])
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
            console.log(error)
            return createResponseObject(false, "Data nilai gagal didapatkan");
        }
    },

    getAllByDosen: async (kelas, jadwal) => {
        try {
            const scores = await Score.findAll({
                attributes: ['id', 'student_id', 'schedule_id', 'score'],
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
                                    id: kelas
                                },
                                through: { attributes: [] }
                            }
                        ],
                        where: {
                            id: jadwal
                        }
                    },
                    {
                        model: Student,
                        attributes: ['id', 'nim', 'name']
                    }
                ],
                raw: true,
                nest: true
            })

            return createResponseObject(true, "Data nilai berhasil didapatkan", scores)
        } catch (error) {
            console.error(error)
            return createResponseObject(false, "Data nilai gagal didapatkan");
        }
    },

    getOne: async (student, schedule) => {
        try {
            const studentDb = await Student.findByPk(student)
            const scheduleDb = await Schedule.findByPk(schedule)
            const answer = await Question.findAll({
                include: [
                    {
                        model: SessionStudentAnswer,
                        required: true,
                        include: [
                            {
                                model: Session,
                                attributes: [],
                                include: [
                                    {
                                        model: Schedule,
                                        attributes: []
                                    },
                                    {
                                        model: Student,
                                        attributes: []
                                    }
                                ],
                                where: {
                                    student_id: student,
                                    schedule_id: schedule
                                }
                            }
                        ],
                    }
                ]
            })
            return createResponseObject(true, "Data pertanyaan berhasil didapatkan", {
                student: studentDb,
                schedule: scheduleDb,
                answer
            })
        } catch (error) {
            console.error(error)
            return createResponseObject(false, "Data pertanyaan gagal didapatkan");
        }
    },

    insert: async (data) => {
        try {
            let newUser = await User.create({
                username: data.username,
                password: hashPassword(data.password),
                no_induk: data.no_induk,
                name: data.name,
            })
            return createResponseObject(true, "Data user berhasil ditambahkan", newUser)
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data user gagal ditambahkan")
        }
    },

    update: async (id, data) => {
        try {
            const user = await User.findByPk(id, {
                attributes: {
                    exclude: ['password']
                }
            })
            if (!user) return createResponseObject(false, "Tidak ada data user didapatkan");

            Object.keys(data).forEach(val => {
                user[val] = data[val]
            })

            await user.save()

            return createResponseObject(true, "Data user berhasil diperbarui", user);
        } catch (error) {
            return createResponseObject(false, "Data user gagal diperbarui");
        }
    },

    destroy: async (id) => {
        try {
            const user = await User.findByPk(id)
            if (!user) return createResponseObject(false, "Tidak ada user yang dihapus")

            await User.destroy({
                where: {
                    id
                }
            })

            return createResponseObject(true, "Data user berhasil dihapus")


        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data user gagal dihapus");
        }
    }

}