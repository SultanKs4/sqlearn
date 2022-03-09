const axios = require("axios");
const { Op, Sequelize } = require("sequelize");
const createResponseObject = require("../../lib/createResponseObject");
const Container = require("../container/container.model");
const Question = require("../question/question.model");
const Schedule = require("../schedule/schedule.model");
const Session = require("./session.model");
const { AUTO_ASSESS_BACKEND } = require("../../config/endpoints");
const CaseStudy = require("../case-study/case-study.model");
const { gradingRulesLatihan, gradingRulesUjian } = require("../../config/gradingRules");
const Score = require("../score/score.model");
const getThreshold = require("../../lib/getThreshold");

module.exports = {
    getAll: async () => {
        try {
            const sessions = await Session.findAll();
            return createResponseObject(true, "Data session berhasil didapatkan", sessions);
        } catch (error) {
            return createResponseObject(false, "Data session gagal didapatkan");
        }
    },

    getOne: async (id) => {
        try {
            const existedAnswer = await SessionStudentAnswer.findAll({
                attributes: ["question_id"],
                where: {
                    session_id: id,
                    type: "submit",
                },
            });
            const existedAnswerId = existedAnswer.map((val) => val.question_id);
            const session = await Session.findByPk(id, {
                attributes: ["questions"],
                include: [
                    {
                        model: Schedule,
                        attributes: ["id", "finish_date", "finish_time"],
                        // include: [
                        //     {
                        //         model: Container,
                        //         include: [
                        //             {
                        //                 model: Question,
                        //                 as: "questions",
                        //                 where: {
                        //                     id: {
                        //                         [Op.notIn]: existedAnswerId
                        //                     }
                        //                 },
                        //                 through: { attributes: [] }
                        //             }
                        //         ],
                        //         attributes: ['id'],
                        //     }
                        // ]
                    },
                ],
            });

            const filteredQuestions = JSON.parse(session.questions).filter(
                (question) => !existedAnswerId.includes(question)
            );
            const questions = await Question.findAll({
                where: {
                    id: {
                        [Op.in]: filteredQuestions,
                    },
                },
            });
            console.log(questions);

            const responseObj = {
                session,
                questions,
            };
            return createResponseObject(true, "Data session berhasil didapatkan", responseObj);
        } catch (error) {
            console.error(error);
            return createResponseObject(false, "Data session gagal didapatkan");
        }
    },

    insert: async (data, user) => {
        try {
            let session = await Session.findOne({
                where: {
                    student_id: user.id,
                    schedule_id: data.schedule,
                },
            });

            if (session) {
                return createResponseObject(true, "Data session berhasil ditemukan", session);
            }

            const schedule = await Schedule.findByPk(data.schedule);
            // const container = await Container.findByPk(schedule.container_id)
            const questions = await Question.findAll({
                attributes: ["id"],
                include: {
                    model: Container,
                    as: "containers",
                    attributes: [],
                    required: true,
                    where: {
                        id: schedule.container_id,
                    },
                    through: { attributes: [] },
                },
                order: Sequelize.literal("rand()"),
                limit: schedule.total_questions,
            });

            const mappedQuestions = questions.map((question) => question.id);

            let newSession = await Session.create({
                student_id: user.id,
                schedule_id: data.schedule,
                questions: JSON.stringify(mappedQuestions),
            });
            return createResponseObject(true, "Data session berhasil ditambahkan", newSession);
        } catch (error) {
            console.log(error);
            return createResponseObject(false, "Data session gagal ditambahkan");
        }
    },

    answer: async (session, question, data) => {
        try {
            const questionDb = await Question.findByPk(question, {
                attributes: ["answer"],
                include: {
                    attributes: ["db_name"],
                    model: CaseStudy,
                },
            });
            if (!questionDb) return createResponseObject(false, "Tidak ada data pertanyaan didapatkan");

            const similarityResponse = await axios.post(
                `${AUTO_ASSESS_BACKEND}/assess/${questionDb["CaseStudy"]["db_name"]}`,
                {
                    queryMhs: data.answer,
                    queryKey: JSON.parse(questionDb.answer),
                    threshold: await getThreshold(),
                }
            );

            await SessionStudentAnswer.create({
                session_id: session,
                question_id: question,
                answer: data.answer,
                type: data.type,
                similarity: similarityResponse.data.similarity,
                is_equal: similarityResponse.data.isEqual,
            });

            return createResponseObject(true, "Data jawaban berhasil ditambahkan", similarityResponse.data);
        } catch (error) {
            console.log(error);
            return createResponseObject(false, "Data jawaban gagal ditambahkan");
        }
    },

    grade: async (session, user) => {
        try {
            const scheduleType = await Session.findByPk(session, {
                // attributes: [],
                include: [
                    {
                        model: Schedule,
                        attributes: ["type", "id"],
                        include: [
                            {
                                model: Container,
                                attributes: [
                                    "id",
                                    [
                                        Sequelize.fn("COUNT", Sequelize.col("Schedule->Container->questions.id")),
                                        "questionCount",
                                    ],
                                ],
                                include: [
                                    {
                                        model: Question,
                                        as: "questions",
                                        attributes: [],
                                        through: { attributes: [] },
                                    },
                                ],
                                group: ["questions.id"],
                            },
                        ],
                    },
                ],
                raw: true,
                nest: true,
            });

            const type = scheduleType["Schedule"]["type"];
            const scheduleId = scheduleType["Schedule"]["id"];
            const totalQuestion = scheduleType["Schedule"]["Container"]["questionCount"];

            const studentAnswer = await SessionStudentAnswer.findAll({
                where: {
                    session_id: session,
                },
                raw: true,
            });

            const attemptsObj = studentAnswer.reduce((acc, val) => {
                if (!acc[val.question_id]) acc[val.question_id] = { submit: {}, test: [] };

                acc[val.question_id][val.type] =
                    val.type == "submit"
                        ? { isEqual: val.is_equal }
                        : [...acc[val.question_id][val.type], { isEqual: val.is_equal }];

                return acc;
            }, {});

            const grade = gradeAssessment(type, totalQuestion, attemptsObj);

            await Score.create({
                student_id: user.id,
                schedule_id: scheduleId,
                score: grade,
            });

            await Session.update(
                { is_finished: true },
                {
                    where: {
                        id: session,
                    },
                }
            );

            return createResponseObject(true, "Proses grading berhasil dilakukan", grade);
        } catch (error) {
            console.log(error);
            return createResponseObject(false, "Proses grading gagal dilakukan");
        }
    },
};

function gradeAssessment(type, totalQuestion, attempts) {
    // const attempPerQuestion = attempts.map(attempt => attempt.count)

    let tempScore = 0;

    const questionsIds = Object.keys(attempts);

    if (type == "latihan") {
        questionsIds.forEach((question) => {
            if (attempts[question]["submit"] && attempts[question]["submit"]["isEqual"]) {
                tempScore += gradingRulesLatihan(attempts[question]["test"].length + 1);
            }
        });
    } else {
        questionsIds.forEach((question) => {
            if (attempts[question]["submit"] && attempts[question]["submit"]["isEqual"]) {
                tempScore += gradingRulesUjian(attempts[question]["test"].length + 1);
            }
        });
    }

    const finalScore = tempScore / totalQuestion;

    return finalScore;
}
