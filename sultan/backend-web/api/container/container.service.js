const { Sequelize } = require("sequelize");
const createResponseObject = require("../../lib/createResponseObject");
const CaseStudy = require("../case-study/case-study.model");
const QuestionContainer = require("../question-container/question-container.model");
const Question = require("../question/question.model");
const QuestionLabel = require("../questions-label/question-label.model");
const User = require("../user/user.model");
const Container = require("./container.model");

module.exports = {
    getAll: async () => {
        try {
            const containers = await Container.findAll({
                attributes: {
                    include: [[Sequelize.fn("COUNT", Sequelize.col("questions.id")), "questionCount"]],
                },
                include: [
                    {
                        model: Question,
                        as: "questions",
                        attributes: [],
                    },
                    {
                        model: User,
                    },
                    {
                        model: QuestionLabel,
                        attributes: ["id", "name"],
                    },
                ],
                group: ["id"],
            });
            return createResponseObject("success", "Data kontainer berhasil didapatkan", containers);
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data kontainer gagal didapatkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    getOne: async (id) => {
        try {
            const containerById = await Container.findByPk(id, {
                include: {
                    model: Question,
                    as: "questions",
                    attributes: ["id", "text", "answer"],
                    through: { attributes: [] },
                    include: [
                        {
                            model: CaseStudy,
                            attributes: ["id", "name"],
                        },
                        {
                            model: User,
                            attributes: ["id", "name"],
                        },
                        {
                            model: QuestionLabel,
                            attributes: ["id", "name"],
                        },
                    ],
                },
            });

            if (containerById == null) throw new Error("container not found");

            return createResponseObject("success", "Data kontainer berhasil didapatkan", containerById);
        } catch (error) {
            console.error(error);
            return createResponseObject(
                "error",
                "Data kontainer gagal didapatkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    insert: async (data, user) => {
        try {
            const newContainer = await Container.create({
                type: data.type,
                description: data.description,
                user_id: user.id,
            });
            return createResponseObject("success", "Data kontainer baru berhasil ditambahkan", newContainer);
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data kontainer baru gagal ditambahkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    update: async (id, data) => {
        try {
            const container = await Container.findByPk(id);
            if (!container) return createResponseObject("error", "Tidak ada data kontainer didapatkan");

            Object.keys(data).forEach((val) => {
                container[val] = data[val];
            });

            await container.save();

            return createResponseObject("success", "Data kontainer berhasil diperbarui", container);
        } catch (error) {
            return createResponseObject(
                "error",
                "Data kontainer gagal diperbarui",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    addQuestion: async (containerId, { questions: questionIds }) => {
        try {
            const container = await Container.findByPk(containerId);
            if (!container) return createResponseObject("error", "Tidak ada data kontainer didapatkan");

            const questions = questionIds.map((id) => {
                return {
                    question_id: id,
                    container_id: containerId,
                };
            });
            const newQuestionContainer = await QuestionContainer.bulkCreate(questions, { returning: true });

            return createResponseObject("success", "Berhasil memasukkan pertanyaan ke kontainer", newQuestionContainer);
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Gagal memasukkan pertanyaan ke kontainer",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    removeQuestion: async (containerId, questionId) => {
        try {
            const questionContainer = await QuestionContainer.findOne({
                where: {
                    question_id: questionId,
                    container_id: containerId,
                },
            });
            if (!questionContainer)
                return createResponseObject("error", "Pertanyaan tidak terdapat di dalam kontainer tersebut");

            await QuestionContainer.destroy({
                where: {
                    question_id: questionId,
                    container_id: containerId,
                },
            });

            return createResponseObject("success", "Berhasil mengeluarkan pertanyaan dari kontainer");
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Gagal mengeluarkan pertanyaan dari kontainer",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    destroy: async (id) => {
        try {
            const container = await Container.findByPk(id);
            if (!container) return createResponseObject("error", "Tidak ada kontainer yang dihapus");

            await Container.destroy({
                where: {
                    id,
                },
            });

            return createResponseObject("success", "Data kontainer berhasil dihapus");
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data kontainer gagal dihapus",
                error == null ? null : error.message ? error.message : error
            );
        }
    },
};
