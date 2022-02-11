const createResponseObject = require("../../lib/createResponseObject");
const deleteFile = require("../../lib/deleteFile");
const CaseStudy = require("../case-study/case-study.model");
const User = require("../user/user.model");
const Question = require("./question.model");
const path = require("path");
const Container = require("../container/container.model");
const { Op } = require("sequelize");
const axios = require("axios");
const { AUTO_ASSESS_BACKEND } = require("../../config/endpoints");
const QuestionLabel = require("../questions-label/question-label.model");

module.exports = {
    getAll: async (query = null) => {
        try {
            const { dosen, case_study } = query;
            let whereDosen = {};
            let whereCaseStudy = {};

            if (dosen) whereDosen = { id: dosen };
            if (case_study) whereCaseStudy = { id: case_study };

            const questions = await Question.findAll({
                include: [
                    {
                        model: User,
                        attributes: ["id", "name"],
                        where: whereDosen,
                    },
                    {
                        model: CaseStudy,
                        attributes: ["id", "name"],
                        where: whereCaseStudy,
                    },
                    {
                        model: QuestionLabel,
                        attributes: ["id", "name"],
                    },
                ],
            });
            return createResponseObject(
                "success",
                "Data pertanyaan berhasil didapatkan",
                questions
            );
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data pertanyaan gagal didapatkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },
    getAllExclude: async (containerId, query = null) => {
        try {
            const { dosen, case_study } = query;
            let whereDosen = {};
            let whereCaseStudy = {};

            if (dosen) whereDosen = { id: dosen };
            if (case_study) whereCaseStudy = { id: case_study };

            const containers = await Container.findByPk(containerId, {
                attributes: [],
                include: {
                    model: Question,
                    as: "questions",
                    attributes: ["id"],
                    through: { attributes: [] },
                },
            });

            const existedQuestionIds = containers["questions"].map(
                (val) => val.id
            );

            const questions = await Question.findAll({
                include: [
                    {
                        model: User,
                        attributes: ["id", "name"],
                        where: whereDosen,
                    },
                    {
                        model: CaseStudy,
                        attributes: ["id", "name"],
                        where: whereCaseStudy,
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
            return createResponseObject(
                "success",
                "Data pertanyaan berhasil didapatkan",
                questions
            );
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data pertanyaan gagal didapatkan",
                error == null ? null : error.message ? error.message : error
            );
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
                        attributes: ["id", "name", "db_name"],
                    },
                    {
                        model: QuestionLabel,
                        attributes: ["id", "name"],
                    },
                ],
                raw: "success",
                nest: "success",
            });

            const tables = question["tables"]
                .split(",")
                .map((val) => val.trim());
            question["tables"] = await tables.reduce(async (acc, curr) => {
                const obj = await acc;
                const res = await axios.get(
                    `${AUTO_ASSESS_BACKEND}/api/v2/database/select/${question["CaseStudy"]["db_name"]}/${curr}`
                );
                obj[curr] = res.data;
                return obj;
            }, Promise.resolve({}));
            // tables.forEach(async table => {

            //     console.log(table)
            //     console.log(res.data)
            //     question['tables'][table] = res.data
            // })

            return createResponseObject(
                "success",
                "Data pertanyaan berhasil didapatkan",
                question
            );
        } catch (error) {
            console.error(error);
            return createResponseObject(
                "error",
                "Data pertanyaan gagal didapatkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },
    insert: async (data, fileName, user) => {
        try {
            const caseStudy = await CaseStudy.findByPk(data.case_study, {
                raw: true,
            });
            const label = await QuestionLabel.findByPk(data.label_id, {
                raw: true,
            });
            const newQuestion = await Question.create({
                text: data.text,
                answer: data.answer,
                answer_pic: fileName,
                tables: data.tables,
                case_study_id: caseStudy.id,
                user_id: user.id,
                label_id: label.id,
            });

            return createResponseObject(
                "success",
                "Data pertanyaan berhasil ditambahkan",
                newQuestion
            );
        } catch (error) {
            return createResponseObject(
                "error",
                "Data pertanyaan gagal ditambahkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },
    deleteOne: async (id) => {
        try {
            const question = await Question.findByPk(id, {
                raw: true,
            });
            if (!question) throw new Error("Tidak ada pertanyaan yang dihapus");

            await Question.destroy({
                where: {
                    id,
                },
            });

            await deleteFile(
                path.join(
                    __dirname,
                    `../../uploads/images/${question["answer_pic"]}`
                )
            );

            return createResponseObject(
                "success",
                "Data pertanyaan berhasil dihapus"
            );
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data pertanyaan gagal dihapus",
                error == null ? null : error.message ? error.message : error
            );
        }
    },
};
