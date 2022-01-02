const { Sequelize } = require('sequelize');
const createResponseObject = require("../../lib/createResponseObject");
const CaseStudy = require("../case-study/case-study.model");
const QuestionContainer = require('../question-container/question-container.model');
const Question = require("../question/question.model");
const User = require("../user/user.model");
const Container = require("./container.model");

module.exports = {
    getAll: async () => {
        try {
            const containers = await Container.findAll({
                attributes: {
                    include: [[Sequelize.fn("COUNT", Sequelize.col("questions.id")), "questionCount"]]
                },
                include: [
                    {
                        model: Question,
                        as: "questions",
                        attributes: []
                    },
                    {
                        model: User
                    }
                ],
                group: ['id']
            })
            return createResponseObject(true, "Data kontainer berhasil didapatkan", containers);
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data kontainer gagal didapatkan");
        }
    },

    getOne: async (id) => {
        try {
            const containerById = await Container.findByPk(id, {
                include: {
                    model: Question,
                    as: "questions",
                    attributes: ['id', 'text', 'answer'],
                    through: { attributes: [] },
                    include: [
                        {
                            model: CaseStudy,
                            attributes: ['id', 'name']
                        },
                        {
                            model: User,
                            attributes: ['id', 'name']
                        }
                    ]
                }
            })
            return createResponseObject(true, "Data kontainer berhasil didapatkan", containerById)
        } catch (error) {
            console.error(error)
            return createResponseObject(false, "Data kontainer gagal didapatkan");
        }
    },

    insert: async (data, user) => {
        try {
            const newContainer = await Container.create({
                type: data.type,
                description: data.description,
                user_id: user.id
            })
            return createResponseObject(true, "Data kontainer baru berhasil ditambahkan", newContainer)
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data kontainer baru gagal ditambahkan")
        }
    },

    update: async (id, data) => {
        try {
            const container = await Container.findByPk(id)
            if (!container) return createResponseObject(false, "Tidak ada data kontainer didapatkan");

            Object.keys(data).forEach(val => {
                container[val] = data[val]
            })

            await container.save()

            return createResponseObject(true, "Data kontainer berhasil diperbarui", container);
        } catch (error) {
            return createResponseObject(false, "Data kontainer gagal diperbarui");
        }
    },

    addQuestion: async (containerId, { questions: questionIds }) => {
        try {
            const container = await Container.findByPk(containerId)
            if (!container) return createResponseObject(false, "Tidak ada data kontainer didapatkan");

            const questions = questionIds.map(id => {
                return {
                    question_id: id,
                    container_id: containerId
                }
            })
            const newQuestionContainer = await QuestionContainer.bulkCreate(questions, { returning: true })

            return createResponseObject(true, "Berhasil memasukkan pertanyaan ke kontainer", newQuestionContainer);
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Gagal memasukkan pertanyaan ke kontainer");
        }
    },

    removeQuestion: async (containerId, questionId) => {
        try {
            const questionContainer = await QuestionContainer.findOne({
                where: {
                    question_id: questionId,
                    container_id: containerId
                }
            })
            if (!questionContainer) return createResponseObject(false, "Pertanyaan tidak terdapat di dalam kontainer tersebut");

            await QuestionContainer.destroy({
                where: {
                    question_id: questionId,
                    container_id: containerId
                }
            })

            return createResponseObject(true, "Berhasil mengeluarkan pertanyaan dari kontainer");
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Gagal mengeluarkan pertanyaan dari kontainer");
        }
    },

    destroy: async (id) => {
        try {
            const container = await Container.findByPk(id)
            if (!container) return createResponseObject(false, "Tidak ada kontainer yang dihapus")

            await Container.destroy({
                where: {
                    id
                }
            })

            return createResponseObject(true, "Data kontainer berhasil dihapus")


        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data kontainer gagal dihapus");
        }
    }


}