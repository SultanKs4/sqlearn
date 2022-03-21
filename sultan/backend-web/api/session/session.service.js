const axios = require("axios");
const { Op, Sequelize } = require("sequelize");
const createResponseObject = require("../../lib/createResponseObject");
const runSql = require("../../lib/runSql");
const Container = require("../container/container.model");
const Question = require("../question/question.model");
const Schedule = require("../schedule/schedule.model");
const Session = require("./session.model");
const { AUTO_ASSESS_BACKEND } = require("../../config/endpoints");
const CaseStudy = require("../case-study/case-study.model");
const { gradingRulesLatihan, gradingRulesUjian } = require("../../config/gradingRules");
const Score = require("../score/score.model");
const getThreshold = require("../../lib/getThreshold");
const DbList = require("../db-list/db-list.model");
const Student = require("../student/student.model");
const Class = require("../class/class.model");
const path = require("path");
const createHttpError = require("http-errors");

module.exports = {
    getAll: async () => {
        try {
            const sessions = await Session.findAll();
            return createResponseObject(200, "success", "Data session berhasil didapatkan", sessions);
        } catch (error) {
            return createResponseObject(404, "error", "Data session gagal didapatkan");
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
                        attributes: ["id", "finish"],
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

            const responseObj = {
                session,
                questions,
            };
            return createResponseObject(200, "success", "Data session berhasil didapatkan", responseObj);
        } catch (error) {
            return createResponseObject(500, "error", "Data session gagal didapatkan");
        }
    },

    insert: async (data, user) => {
        try {
            await Schedule.findOne({
                where: { id: data.schedule },
            }).then((data) => {
                if (!data) throw createHttpError(404, "schedule data not found");
            });

            await Student.findOne({
                where: { id: user.id },
                include: {
                    model: Class,
                    through: { attributes: [] },
                    as: "classes",
                    include: {
                        model: Schedule,
                        through: { attributes: [] },
                        where: { id: data.schedule },
                        as: "schedules",
                    },
                },
            }).then((data) => {
                if (data.classes.length == 0) throw createHttpError(409, "student don't belong to this schedule");
            });

            const [session, created] = await Session.findOrCreate({
                where: {
                    student_id: user.id,
                    schedule_id: data.schedule,
                },
            });

            if (created) {
                await Schedule.findOne({
                    where: { id: data.schedule },
                    include: {
                        model: Container,
                        attributes: ["id"],
                        include: {
                            model: Question,
                            as: "questions",
                            attributes: ["id"],
                            through: { attributes: [] },
                            include: {
                                model: CaseStudy,
                                attributes: ["db_list_id"],
                                include: { model: DbList, attributes: ["db_name", "db_filename"] },
                            },
                        },
                    },
                }).then(async (data) => {
                    const dbNameSet = new Set();
                    const dbArr = data.Container.questions.reduce((prev, curr) => {
                        if (!dbNameSet.has(curr.CaseStudy.DbList.db_name)) {
                            dbNameSet.add(curr.CaseStudy.DbList.db_name);
                            prev.push({
                                dbName: [
                                    `${curr.CaseStudy.DbList.db_name}_${session.id}_${user.id}_key`,
                                    `${curr.CaseStudy.DbList.db_name}_${session.id}_${user.id}_student`,
                                ],
                                dbFilename: curr.CaseStudy.DbList.db_filename,
                            });
                        }
                        return prev;
                    }, []);
                    await dbArr.reduce(async (prevDbArr, currDbArr) => {
                        await prevDbArr;
                        await currDbArr.dbName.reduce(async (prevDbName, currDbName) => {
                            await prevDbName;
                            await DbList.create({
                                db_name: currDbName,
                                db_filename: currDbArr.dbFilename,
                            }).then(async (data) => {
                                await session.addDbLists(data);
                            });
                            await axios.post(`${AUTO_ASSESS_BACKEND}/api/v2/database/create/${currDbName}`);
                            const resRunSql = await runSql(
                                currDbName,
                                path.join(__dirname, `../../uploads/sqls/${currDbArr.dbFilename}`)
                            );
                            if (!resRunSql) {
                                throw {
                                    data: resRunSql,
                                    message: "Clone Database Gagal dilakukan",
                                };
                            }
                        }, Promise.resolve());
                    }, Promise.resolve());
                });
            }
            return createResponseObject(200, "success", "Data session berhasil ditambahkan", session);
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            if (createError.isHttpError(error)) code = error.statusCode;

            return createResponseObject(code, "error", message, data);
        }
    },

    answer: async (sessionId, questionId, data, user) => {
        try {
            const dbList = await Session.findOne({
                where: { id: sessionId, student_id: user.id },
            }).then(async (data) => {
                if (!data) throw createHttpError(404, "Tidak ada data sesi didapatkan");
                let dbListData = await data.getDbLists();
                return dbListData.map((e) => {
                    return e.db_name;
                });
            });

            await Question.findByPk(questionId).then((data) => {
                if (!data) throw createHttpError(404, "Tidak ada data pertanyaan didapatkan");
            });

            const similarityResponse = await axios.post(`${AUTO_ASSESS_BACKEND}/api/v2/assessment/multi_key`, {
                dbList,
                queryMhs: data.answer,
                queryKey: JSON.parse(question.answer),
                threshold: await getThreshold(),
            });

            // await LogSessionStudent.create({
            //     session_id: sessionId,
            //     question_id: questionId,
            //     answer: data.answer,
            //     type: data.type,
            //     similarity: similarityResponse.data.similarity,
            //     is_equal: similarityResponse.data.isEqual,
            // });

            return createResponseObject(200, "success", "Data jawaban berhasil ditambahkan", similarityResponse.data);
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            if (createError.isHttpError(error)) code = error.statusCode;

            return createResponseObject(code, "error", message, data);
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

            return createResponseObject(200, "success", "Proses grading berhasil dilakukan", grade);
        } catch (error) {
            console.log(error);
            return createResponseObject(500, "error", "Proses grading gagal dilakukan");
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
