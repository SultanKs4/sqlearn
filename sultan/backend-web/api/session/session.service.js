const axios = require("axios").default;
const { Op, Sequelize } = require("sequelize");
const createResponseObject = require("../../lib/createResponseObject");
const runSql = require("../../lib/runSql");
const Container = require("../container/container.model");
const LogSessionStudent = require("../log-session-student/log-session-student.model");
const Question = require("../question/question.model");
const Schedule = require("../schedule/schedule.model");
const Session = require("./session.model");
const { AUTO_ASSESS_BACKEND } = require("../../config/endpoints");
const CaseStudy = require("../case-study/case-study.model");
const { gradingRules } = require("../../config/gradingRules");
const Score = require("../score/score.model");
const DbList = require("../db-list/db-list.model");
const Student = require("../student/student.model");
const Class = require("../class/class.model");
const path = require("path");
const createHttpError = require("http-errors");
const { findByType, dataThreshold } = require("../setting/setting.service");
const errorHandling = require("../../lib/errorHandling");

module.exports = {
    getAll: async () => {
        try {
            const sessions = await Session.findAll();
            return createResponseObject(200, "success", "Data session berhasil didapatkan", sessions);
        } catch (error) {
            return errorHandling(error);
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
            return errorHandling(error);
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
                            await axios
                                .post(`${AUTO_ASSESS_BACKEND}/api/v2/database/create/${currDbName}`)
                                .then(async () => {
                                    const resRunSql = await runSql(
                                        currDbName,
                                        path.join(__dirname, `../../uploads/sqls/${currDbArr.dbFilename}`)
                                    );
                                    if (!resRunSql) throw createHttpError(500, "Clone Database Gagal dilakukan");
                                });
                        }, Promise.resolve());
                    }, Promise.resolve());
                });
            }
            return createResponseObject(200, "success", "Data session berhasil ditambahkan", session);
        } catch (error) {
            return errorHandling(error);
        }
    },

    answer: async (sessionId, questionId, log, user) => {
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

            const question = await Question.findByPk(questionId).then((data) => {
                if (!data) throw createHttpError(404, "Tidak ada data pertanyaan didapatkan");
            });

            let similarityResponse = null;
            let dataLogReady = await Promise.all(
                log.map(async (val, i) => {
                    let dataObj = {
                        session_id: sessionId,
                        question_id: questionId,
                        answer: val.answer,
                        type: val.type,
                        similarity: -1.0,
                        is_equal: 0,
                        timer: val.timer,
                    };
                    if (i == log.length - 1) {
                        similarityResponse = await axios.post(`${AUTO_ASSESS_BACKEND}/api/v2/assessment/multi_key`, {
                            dbList,
                            queryMhs: val.answer,
                            queryKey: JSON.parse(question.answer),
                            threshold: await dataThreshold().value,
                        });
                        dataObj.similarity = similarityResponse.data.similarity;
                        dataObj.is_equal = similarityResponse.data.is_equal;
                    }
                    return dataObj;
                })
            );

            await LogSessionStudent.bulkCreate(dataLogReady);

            return createResponseObject(200, "success", "Data jawaban berhasil ditambahkan", similarityResponse.data);
        } catch (error) {
            return errorHandling(error);
        }
    },

    reset: async (sessionId) => {
        try {
            const sessionData = await Session.findByPk(sessionId);
            if (!sessionData) throw createHttpError(404, "session data not found");
            const dbLists = await sessionData.getDbLists();
            for (const dbList of dbLists) {
                await axios.delete(`${AUTO_ASSESS_BACKEND}/api/v2/database/drop/${dbList.db_name}`);
                await axios.post(`${AUTO_ASSESS_BACKEND}/api/v2/database/create/${dbList.db_name}`);
                await runSql(dbList.db_name, path.join(__dirname, `../../uploads/sqls/${dbList.db_filename}`));
            }
            return createResponseObject(200, "success", "database reset");
        } catch (error) {
            return errorHandling(error);
        }
    },

    grade: async (session, user) => {
        try {
            const sessionData = await Session.findByPk(session, {
                include: [
                    {
                        model: Schedule,
                        attributes: ["type", "id", "container_id"],
                        include: [
                            {
                                model: Container,
                                attributes: ["id"],
                            },
                        ],
                    },
                ],
            });
            if (!sessionData) throw createHttpError(404, "session data not found");

            const type = sessionData.Schedule.type;
            const scheduleId = sessionData.Schedule.id;
            const totalQuestion = await sessionData.Schedule.Container.countQuestions();

            const studentAnswer = await LogSessionStudent.findAll({
                where: {
                    session_id: session,
                },
                raw: true,
            });

            const attemptsObj = studentAnswer.reduce((acc, val) => {
                if (!acc[val.question_id]) acc[val.question_id] = { start: {}, move: [], submit: {}, test: [] };

                acc[val.question_id][val.type] =
                    val.type == "submit" || val.type == "start"
                        ? { isEqual: val.is_equal }
                        : [...acc[val.question_id][val.type], { isEqual: val.is_equal }];
                return acc;
            }, {});

            const grade = gradeAssessment(type, totalQuestion, attemptsObj, await findByType(type));

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
            return errorHandling(error);
        }
    },
};

function gradeAssessment(type, totalQuestion, attempts, dataRules) {
    // const attempPerQuestion = attempts.map(attempt => attempt.count)

    let tempScore = 0;

    const questionsIds = Object.keys(attempts);

    if (type == "latihan") {
        questionsIds.forEach((question) => {
            if (attempts[question]["submit"] && attempts[question]["submit"]["isEqual"]) {
                tempScore += gradingRules(attempts[question]["test"].length, dataRules);
            }
        });
    } else {
        questionsIds.forEach((question) => {
            if (attempts[question]["submit"] && attempts[question]["submit"]["isEqual"]) {
                tempScore += gradingRules(attempts[question]["test"].length, dataRules);
            }
        });
    }

    const finalScore = tempScore / totalQuestion;

    return finalScore;
}
