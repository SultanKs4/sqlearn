const createResponseObject = require("../../lib/createResponseObject");
const deleteFile = require("../../lib/deleteFile");
const CaseStudy = require("../case-study/case-study.model");
const User = require("../user/user.model");
const Question = require("./question.model");
const path = require("path");
const Container = require("../container/container.model");
const { Op } = require("sequelize");
const axios = require("axios").default;
const { AUTO_ASSESS_BACKEND } = require("../../config/endpoints");
const QuestionLabel = require("../questions-label/question-label.model");
const DbList = require("../db-list/db-list.model");
const createHttpError = require("http-errors");
const errorHandling = require("../../lib/errorHandling");

module.exports = {
    getAll: async (query = null) => {
        try {
            const questions = await Question.findAll({
                include: [
                    {
                        model: User,
                        attributes: ["id", "name"],
                        where: query.dosen ? { id: query.dosen } : {},
                    },
                    {
                        model: CaseStudy,
                        attributes: ["id", "name"],
                        where: query.case_study ? { id: query.case_study } : {},
                    },
                    {
                        model: QuestionLabel,
                        attributes: ["id", "name"],
                        where: query.label ? { id: query.label } : {},
                    },
                ],
            });
            return createResponseObject(200, "success", "Data pertanyaan berhasil didapatkan", questions);
        } catch (error) {
            return errorHandling(error);
        }
    },
    getAllExclude: async (containerId, query = null) => {
        try {
            const containers = await Container.findByPk(containerId, {
                attributes: [],
                include: {
                    model: Question,
                    as: "questions",
                    attributes: ["id"],
                    through: { attributes: [] },
                },
            });

            if (!containers) throw createHttpError(404, "container not found");

            const existedQuestionIds = containers["questions"].map((val) => val.id);

            const questions = await Question.findAll({
                include: [
                    {
                        model: User,
                        attributes: ["id", "name"],
                        where: query.dosen ? { id: query.dosen } : {},
                    },
                    {
                        model: CaseStudy,
                        attributes: ["id", "name"],
                        where: query.case_study ? { id: query.case_study } : {},
                    },
                    {
                        model: QuestionLabel,
                        attributes: ["id", "name"],
                    },
                ],
                where: {
                    id: {
                        [Op.notIn]: existedQuestionIds,
                    },
                },
            });
            return createResponseObject(200, "success", "Data pertanyaan berhasil didapatkan", questions);
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            if (createHttpError.isHttpError(error)) code = error.statusCode;

            return createResponseObject(code, "error", message, data);
        }
    },
    getOne: async (id) => {
        try {
            const question = await Question.findByPk(id, {
                include: [
                    {
                        model: User,
                        attributes: ["id", "name"],
                    },
                    {
                        model: CaseStudy,
                        attributes: ["id", "name", "db_list_id"],
                        include: { model: DbList, attributes: ["db_name"] },
                    },
                    {
                        model: QuestionLabel,
                        attributes: ["id", "name"],
                    },
                ],
                raw: true,
                nest: true,
            });

            if (!question) throw createHttpError(404, "question not found");

            const tables = question["tables"].split(",").map((val) => val.trim());
            question["tables"] = await tables.reduce(async (acc, curr) => {
                const obj = await acc;
                const res = await axios.get(
                    `${AUTO_ASSESS_BACKEND}/api/v2/database/select/${question.CaseStudy.DbList.db_name}/${curr}`
                );
                obj[curr] = res.data;
                return obj;
            }, Promise.resolve({}));

            return createResponseObject(200, "success", "Data pertanyaan berhasil didapatkan", question);
        } catch (error) {
            return errorHandling(error);
        }
    },
    insert: async (data, fileName, user) => {
        try {
            const caseStudy = await CaseStudy.findByPk(data.case_study, {
                raw: true,
            });
            if (!caseStudy) throw createHttpError(404, "case study not found");

            const label = await QuestionLabel.findByPk(data.label_id, {
                raw: true,
            });
            if (!label) throw createHttpError(404, "label not found");

            const newQuestion = await Question.create({
                text: data.text,
                answer: data.answer,
                answer_pic: fileName,
                tables: data.tables,
                case_study_id: caseStudy.id,
                user_id: user.id,
                label_id: label.id,
            });

            return createResponseObject(200, "success", "Data pertanyaan berhasil ditambahkan", newQuestion);
        } catch (error) {
            return errorHandling(error);
        }
    },
    update: async (questionId, data, fileName, user) => {
        try {
            const questionData = await Question.findByPk(questionId);
            if (!questionData) throw createHttpError(404, "question not found");

            const caseStudy = await CaseStudy.findByPk(data.case_study, {
                raw: true,
            });
            if (!caseStudy) throw createHttpError(404, "case study not found");

            const label = await QuestionLabel.findByPk(data.label_id, {
                raw: true,
            });
            if (!label) throw createHttpError(404, "label not found");

            let dataUpdate = {
                text: data.text,
                answer: data.answer,
                answer_pic: fileName,
                tables: data.tables,
                case_study_id: caseStudy.id,
                user_id: user.id,
                label_id: label.id,
            };
            Object.keys(dataUpdate).forEach((val) => {
                questionData[val] = dataUpdate[val];
            });
            await questionData.save();

            return createResponseObject(200, "success", "Data pertanyaan berhasil diperbarui", question);
        } catch (error) {
            return errorHandling(error);
        }
    },
    deleteOne: async (id) => {
        try {
            const question = await Question.findByPk(id, {
                raw: true,
            });
            if (!question) throw createHttpError(404, "question not found");

            await Question.destroy({
                where: {
                    id,
                },
            });

            await deleteFile(path.join(__dirname, `../../uploads/images/${question["answer_pic"]}`));

            return createResponseObject(200, "success", "Data pertanyaan berhasil dihapus");
        } catch (error) {
            return errorHandling(error);
        }
    },
};
