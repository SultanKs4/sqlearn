const createResponseObject = require("../../lib/createResponseObject");
const deleteFile = require("../../lib/deleteFile");
const CaseStudy = require("../case-study/case-study.model");
const User = require("../user/user.model");
const Question = require("./question.model");
const path = require('path');
const Container = require("../container/container.model");
const { Op } = require("sequelize");
const axios = require("axios");
const { AUTO_ASSESS_BACKEND } = require("../../config/endpoints");

module.exports = {
    getAll: async (query = null) => {
        try {
            const { dosen, case_study } = query
            let whereDosen = {};
            let whereCaseStudy = {};

            if (dosen) whereDosen = { id: dosen }
            if (case_study) whereCaseStudy = { id: case_study }

            const questions = await Question.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['id', 'name'],
                        where: whereDosen
                    },
                    {
                        model: CaseStudy,
                        attributes: ['id', 'name'],
                        where: whereCaseStudy
                    },
                ],
            })
            return createResponseObject(true, "Data pertanyaan berhasil didapatkan", questions);
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data pertanyaan gagal didapatkan");
        }
    },
    getAllExclude: async (containerId, query = null) => {
        try {
            const { dosen, case_study } = query
            let whereDosen = {};
            let whereCaseStudy = {};

            if (dosen) whereDosen = { id: dosen }
            if (case_study) whereCaseStudy = { id: case_study }

            const containers = await Container.findByPk(containerId, {
                attributes: [],
                include: {
                    model: Question,
                    as: "questions",
                    attributes: ['id'],
                    through: { attributes: [] }
                },
            })

            const existedQuestionIds = containers['questions'].map(val => val.id)

            const questions = await Question.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['id', 'name'],
                        where: whereDosen
                    },
                    {
                        model: CaseStudy,
                        attributes: ['id', 'name'],
                        where: whereCaseStudy
                    },
                ],
                where: {
                    id: {
                        [Op.notIn]: existedQuestionIds
                    }
                }
            })
            return createResponseObject(true, "Data pertanyaan berhasil didapatkan", questions);
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data pertanyaan gagal didapatkan");
        }
    },
    getOne: async (id) => {
        try {
            const question = await Question.findByPk(id, {
                include: [
                    {
                        model: User,
                        attributes: ['id', 'name']
                    },
                    {
                        model: CaseStudy,
                        attributes: ['id', 'name', 'db_name'],
                    },
                ],
                raw: true,
                nest: true
            })

            const tables = question['tables'].split(',').map(val => val.trim())
            question['tables'] = await tables.reduce(async (acc, curr) => {
                const obj = await acc
                const res = await axios.get(`${AUTO_ASSESS_BACKEND}/select/${question['CaseStudy']['db_name']}/${curr}`)
                obj[curr] = res.data
                return obj
            }, Promise.resolve({}))
            // tables.forEach(async table => {

            //     console.log(table)
            //     console.log(res.data)
            //     question['tables'][table] = res.data
            // })

            return createResponseObject(true, "Data pertanyaan berhasil didapatkan", question)
        } catch (error) {
            console.error(error)
            return createResponseObject(false, "Data pertanyaan gagal didapatkan");
        }
    },
    insert: async (data, fileName, user) => {
        try {
            const newQuestion = await Question.create({
                text: data.text,
                answer: data.answer,
                answer_pic: fileName,
                tables: data.tables,
                case_study_id: data.case_study,
                user_id: user.id
            })

            return createResponseObject(true, "Data pertanyaan berhasil ditambahkan", newQuestion);
        } catch (err) {
            console.log(err)
            return createResponseObject(false, "Data pertanyaan gagal ditambahkan");
        }
    },
    deleteOne: async (id) => {
        try {
            const question = await Question.findByPk(id, {
                raw: true
            })
            if (!question) return createResponseObject(false, "Tidak ada pertanyaan yang dihapus")

            await Question.destroy({
                where: {
                    id
                }
            })

            await deleteFile(path.join(__dirname, `../../uploads/images/${question['answer_pic']}`))

            return createResponseObject(true, "Data pertanyaan berhasil dihapus")


        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data pertanyaan gagal dihapus");
        }

    }
};
