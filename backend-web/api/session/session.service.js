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
const User = require("../user/user.model");

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
            const session = await Session.findByPk(id, {
                include: [
                    {
                        model: Schedule,
                        attributes: ["id", "container_id", "finish"],
                        include: [{ model: Container }],
                    },
                ],
            });
            const listQuestion = await session.Schedule.Container.getQuestions({
                attributes: { exclude: ["answer"] },
                joinTableAttributes: [],
            });
            const questionAnswered = await session.getLogSessionStudents({ where: { type: "submit" } });

            const questionNotAnswered = listQuestion.filter((question) => !questionAnswered.includes(question.id));

            const responseObj = {
                session,
                questionNotAnswered,
            };
            return createResponseObject(200, "success", "Data session berhasil didapatkan", responseObj);
        } catch (error) {
            return errorHandling(error);
        }
    },

    insert: async (schedule_id, user) => {
        try {
            let scheduleData = await Schedule.findByPk(schedule_id, {
                include: [
                    {
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
                    {
                        model: Class,
                        through: { attributes: [] },
                        include: { model: Student, where: { id: user.id }, as: "students" },
                        as: "classes",
                    },
                ],
            }).then((data) => {
                if (!data) throw createHttpError(404, "schedule data not found");
                if (data.classes.length == 0) throw createHttpError(409, "student don't belong to this schedule");
                if (new Date() < new Date(data.start)) throw createHttpError(400, "schedule still closed");
                return data;
            });

            const [session, created] = await Session.findOrCreate({
                where: {
                    student_id: user.id,
                    schedule_id,
                },
            });

            let dbLists = await session.getDbLists();

            if (created || dbLists.length == 0) {
                const dbNameSet = new Set();
                const dbArr = scheduleData.Container.questions.reduce((prev, curr) => {
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
                for (const dbListArr of dbArr) {
                    for (const dbName of dbListArr.dbName) {
                        await DbList.create({
                            db_name: dbName,
                            db_filename: dbListArr.dbFilename,
                        }).then(async (data) => {
                            await session.addDbLists(data);
                            await axios
                                .post(`${AUTO_ASSESS_BACKEND}/api/v2/database/create/${dbName}`)
                                .then(async () => {
                                    const resRunSql = await runSql(
                                        dbName,
                                        path.join(__dirname, `../../uploads/sqls/${dbListArr.dbFilename}`)
                                    );
                                    if (!resRunSql) throw createHttpError(500, "Clone Database Gagal dilakukan");
                                });
                        });
                    }
                }
            }
            return createResponseObject(200, "success", "Data session berhasil ditambahkan", session);
        } catch (error) {
            return errorHandling(error);
        }
    },

    answer: async (sessionId, questionId, log, user) => {
        try {
            const question = await Question.findByPk(questionId, {
                attributes: ["answer"],
                include: {
                    model: CaseStudy,
                    attributes: ["db_list_id"],
                    include: { model: DbList, attributes: ["db_name"] },
                },
            }).then((data) => {
                if (!data) throw createHttpError(404, "Tidak ada data pertanyaan didapatkan");
                return data;
            });

            const dbList = await Session.findOne({
                where: { id: sessionId, student_id: user.id },
                include: { model: Schedule },
            }).then(async (data) => {
                if (!data) throw createHttpError(404, "Tidak ada data sesi didapatkan");
                if (data.is_finished) throw createHttpError(400, "session already finished");
                const dateStart = new Date(data.Schedule.start).getTime();
                const dateFinish = new Date(data.Schedule.finish).getTime();
                const dateNow = new Date().getTime();
                if (dateNow <= dateStart || dateNow >= dateFinish) throw createHttpError(400, "schedule date expired");
                let dbListData = await data.getDbLists();
                return dbListData.map((e) => {
                    let re = new RegExp(`_${sessionId}_${user.id}_.*$`);
                    let dbName = e.db_name.replace(re, "");
                    if (dbName == question.CaseStudy.DbList.db_name) return e.db_name;
                });
            });

            let response = {};
            let dataLogReady = await Promise.all(
                log.map(async (val, i) => {
                    let queryMhs = String(val.answer)
                        .trim()
                        .replaceAll(/[\n\t\r]/gm, " ")
                        .replace(/[^a-zA-Z0-9|'|"|)]*$/gm, "");
                    let dataObj = {
                        session_id: sessionId,
                        question_id: questionId,
                        answer: queryMhs,
                        answer_json: val.answer_json,
                        type: val.type,
                        similarity: -1.0,
                        is_equal: 0,
                        timer: val.timer,
                    };
                    if (i == log.length - 1) {
                        if (val.type == "test" || val.type == "submit") {
                            let similarityResponse = await axios
                                .post(`${AUTO_ASSESS_BACKEND}/api/v2/assessment/multi_key`, {
                                    dbList,
                                    queryMhs,
                                    queryKey: JSON.parse(question.answer),
                                    threshold: await dataThreshold().value,
                                })
                                .then((data) => {
                                    return data;
                                })
                                .catch((error) => {
                                    return error.response;
                                })
                                .finally(async () => {
                                    await module.exports.reset(sessionId);
                                });
                            response.status = similarityResponse.data.status;
                            response.message = similarityResponse.data.message;
                            Object.assign(response, { ...similarityResponse.data.data });
                            dataObj.similarity = similarityResponse.data.data.similarity;
                            dataObj.is_equal = similarityResponse.data.data.is_equal;
                        } else throw createHttpError(500, "end log doesn't test or submit type");
                    }
                    return dataObj;
                })
            );
            if (dataLogReady.length == 0) throw createHttpError(404, "data log empty");

            await LogSessionStudent.bulkCreate(dataLogReady);

            return createResponseObject(200, "success", "Data jawaban berhasil ditambahkan", response);
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
            if (sessionData.is_finished) return createHttpError(400, "this session already finished");
            if (sessionData.student_id != user.id)
                return createHttpError(404, "this session don't belong to your credentials");

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
                if (!acc[val.question_id]) acc[val.question_id] = { submit: [], test: [] };

                if (val.type == "test" || val.type == "submit")
                    acc[val.question_id][val.type] = [...acc[val.question_id][val.type], { isEqual: val.is_equal }];
                return acc;
            }, {});

            const grade = gradeAssessment(totalQuestion, attemptsObj, await findByType(type));

            const [score, _createdScore] = await Score.findOrCreate({
                where: {
                    student_id: user.id,
                    schedule_id: scheduleId,
                },
                defaults: {
                    score: grade,
                },
            });

            if (score.score != grade) {
                score.score = grade;
                await score.save();
            }

            sessionData.is_finished = true;
            await sessionData.save();
            await cleanDb(sessionData);

            return createResponseObject(200, "success", "Proses grading berhasil dilakukan", grade);
        } catch (error) {
            return errorHandling(error);
        }
    },

    clean: async () => {
        try {
            const sessionDatas = await Session.findAll({ include: { model: Schedule, attributes: ["finish"] } });
            for (const session of sessionDatas) {
                const finish = new Date(session.Schedule.finish);
                const now = new Date();
                if (!session.is_finished && now >= finish) {
                    await module.exports.grade(session.id, await Student.findByPk(session.student_id));
                } else if (session.is_finished) {
                    await cleanDb(session);
                }
                const dbLists = await session.getDbLists();
                console.log(dbLists);
            }
            return createResponseObject(200, "success", "Proses cleaning berhasil dilakukan");
        } catch (error) {
            return errorHandling(error);
        }
    },
};

async function cleanDb(session) {
    const dbLists = await session.getDbLists();
    for (const dbList of dbLists) {
        await axios
            .get(`${AUTO_ASSESS_BACKEND}/api/v2/database/check/${dbList.db_name}`)
            .then(async () => {
                await axios.delete(`${AUTO_ASSESS_BACKEND}/api/v2/database/drop/${dbList.db_name}`);
            })
            .catch((error) => {
                console.log(error);
                // db not found in system, do nothing
            });
        await session.removeDbList(dbList);
        await DbList.destroy({ where: { id: dbList.id } });
    }
}

function gradeAssessment(totalQuestion, attempts, dataRules) {
    // const attempPerQuestion = attempts.map(attempt => attempt.count)

    let tempScore = 0;

    for (const key in attempts) {
        const submit = attempts[key]["submit"];
        if (submit.length > 0) {
            if (submit[submit.length - 1]["isEqual"]) {
                const attempsSum = attempts[key]["test"].length + attempts[key]["submit"].length;
                tempScore += gradingRules(attempsSum, dataRules);
            }
        }
    }

    return tempScore / totalQuestion;
}
