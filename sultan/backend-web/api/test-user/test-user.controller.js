const axios = require("axios")
const CaseStudy = require("../case-study/case-study.model")
const Container = require("../container/container.model")
const Question = require("../question/question.model")
const TestUserAnswer = require("./test-user.model")
const { AUTO_ASSESS_BACKEND } = require("../../config/endpoints");

module.exports = {
    index: async (req, res) => {
        const questions = await Container.findAll({
            include: {
                model: Question,
                as: "questions",
                through: { attributes: [] }
            },
            where: {
                id: 3
            }
        })

        return res.status(200).json(questions)
    },

    answer: async (req, res) => {
        const { id: question } = req.params
        const data = req.body
        const questionDb = await Question.findByPk(question, {
            attributes: ['answer'],
            include: {
                attributes: ['db_name'],
                model: CaseStudy
            }
        })
        if (!questionDb) return res.status(200).json({ success: false });

        const similarityResponse = await axios.post(`${AUTO_ASSESS_BACKEND}/assess/${questionDb['CaseStudy']['db_name']}`, {
            queryMhs: data.answer,
            queryKey: JSON.parse(questionDb.answer),
            threshold: await getThreshold()
        })

        await TestUserAnswer.create({
            name: data.name,
            question_id: question,
            answer: data.answer,
            type: data.type,
            similarity: similarityResponse.data.similarity,
            is_equal: similarityResponse.data.isEqual
        })

        return res.status(200).json({ success: true, ...similarityResponse.data });
    },

    store: async (req, res) => {
        const questions = await Container.findAll({
            include: {
                model: Question,
                as: "questions",
                through: { attributes: [] }
            },
            where: {
                id: 2
            },
            raw: true,
            nest: true
        })
        let totalQuestion = questions.length

        const studentAnswer = await TestUserAnswer.findAll({
            where: {
                name: req.body.name
            },
            raw: true
        })

        const attemptsObj = studentAnswer.reduce((acc, val) => {
            if (!acc[val.question_id]) acc[val.question_id] = { submit: {}, test: [] }

            acc[val.question_id][val.type] = (val.type == 'submit') ? { isEqual: val.is_equal } : [...acc[val.question_id][val.type], { isEqual: val.is_equal }]

            return acc
        }, {})

        const grade = gradeAssessment(totalQuestion, attemptsObj)

        return res.json(grade)
    },
}

function gradeAssessment(totalQuestion, attempts) {
    let tempScore = 0

    const questionsIds = Object.keys(attempts)
    questionsIds.forEach(question => {
        if (attempts[question]['submit'] && attempts[question]['submit']['isEqual']) {
            tempScore += gradingRulesLatihan(attempts[question]['test'].length + 1)
        }
    })

    const finalScore = tempScore / totalQuestion

    return finalScore

}