const createHttpError = require("http-errors");
const { Sequelize } = require("sequelize");
const createResponseObject = require("../../lib/createResponseObject");
const errorHandling = require("../../lib/errorHandling");
const CaseStudy = require("../case-study/case-study.model");
const QuestionContainer = require("../question-container/question-container.model");
const Question = require("../question/question.model");
const QuestionLabel = require("../questions-label/question-label.model");
const Schedule = require("../schedule/schedule.model");
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
                        attributes: ["id", "name"],
                    },
                    {
                        model: QuestionLabel,
                        attributes: ["id", "name"],
                    },
                ],
                group: ["id"],
            });
            return createResponseObject(200, "success", "Data kontainer berhasil didapatkan", containers);
        } catch (error) {
            return errorHandling(error);
        }
    },

    getOne: async (id) => {
        try {
            let containerById = await Container.findByPk(id, {
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
                // order: Sequelize.literal("rand()"),
            });

            if (!containerById) throw createHttpError(404, "container not found");

            containerById = containerById.toJSON();

            containerById.questions.forEach((val, i) => {
                let next_id = null;
                if (i != containerById.questions.length - 1) next_id = containerById.questions[i + 1].id;
                val.next_id = next_id;
            });

            return createResponseObject(200, "success", "Data kontainer berhasil didapatkan", containerById);
        } catch (error) {
            return errorHandling(error);
        }
    },

    insert: async (data, user) => {
        try {
            const label = await QuestionLabel.findByPk(data.label_id, { raw: true });
            if (!label) throw createHttpError(404, "label not found");

            const newContainer = await Container.create({
                description: data.description,
                user_id: user.id,
                label_id: label.id,
            });
            return createResponseObject(201, "success", "Data kontainer baru berhasil ditambahkan", newContainer);
        } catch (error) {
            return errorHandling(error);
        }
    },

    update: async (id, data, user) => {
        try {
            const containerData = await Container.findByPk(id);
            if (!containerData) throw createHttpError(404, "container not found");

            const label = await QuestionLabel.findByPk(data.label_id, { raw: true });
            if (!label) throw createHttpError(404, "label not found");

            let dataUpdate = {
                description: data.description,
                user_id: user.id,
                label_id: label.id,
            };
            Object.keys(dataUpdate).forEach((val) => {
                containerData[val] = dataUpdate[val];
            });
            await containerData.save();

            return createResponseObject(200, "success", "Data kontainer berhasil diperbarui", container);
        } catch (error) {
            return errorHandling(error);
        }
    },

    addQuestion: async (containerId, questionIds) => {
        try {
            const container = await Container.findByPk(containerId, { include: { model: Schedule } });
            if (!container) throw createHttpError(404, "container not found");

            const questionss = await questionIds.reduce(async (prev, curr) => {
                await prev;
                let question = await Question.findByPk(curr);
                if (!question) throw createHttpError(404, `question id ${curr} not found`);
                if (container.label_id != question.label_id)
                    throw createHttpError(409, `question id ${curr} has different label`);
                container.addQuestions(question);
            }, Promise.resolve());

            let schedules = container.schedules;
            for (const schedule of schedules) {
                const total_questions = await container.countQuestions();
            }
            if (Object.keys(schedules).length > 0) {
                const total_questions = await Question.findAndCountAll({
                    include: {
                        model: Container,
                        as: "containers",
                        where: {
                            id: containerId,
                        },
                    },
                });

                for (const schedule of schedules) {
                    schedule.total_questions = total_questions;
                    schedule.save();
                }
            }

            return createResponseObject(
                201,
                "success",
                "Berhasil memasukkan pertanyaan ke kontainer",
                newQuestionContainer
            );
        } catch (error) {
            return errorHandling(error);
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
            if (!questionContainer) throw createHttpError(404, "pertanyaan tidak terdapat dalam kontainer");

            await QuestionContainer.destroy({
                where: {
                    question_id: questionId,
                    container_id: containerId,
                },
            });

            let schedules = await Schedule.findAll({ where: { container_id: containerId } });
            if (Object.keys(schedules).length > 0) {
                const total_questions = await Question.findAndCountAll({
                    include: {
                        model: Container,
                        as: "containers",
                        where: {
                            id: containerId,
                        },
                    },
                });

                for (const schedule of schedules) {
                    schedule.total_questions = total_questions;
                    schedule.save();
                }
            }

            return createResponseObject(200, "success", "Berhasil mengeluarkan pertanyaan dari kontainer");
        } catch (error) {
            return errorHandling(error);
        }
    },

    destroy: async (id) => {
        try {
            const container = await Container.findByPk(id);
            if (!container) throw createHttpError(404, "container not found");

            await Container.destroy({
                where: {
                    id,
                },
            });

            return createResponseObject(200, "success", "Data kontainer berhasil dihapus");
        } catch (error) {
            return errorHandling(error);
        }
    },
};
