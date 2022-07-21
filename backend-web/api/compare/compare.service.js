const { default: axios } = require("axios");
const createHttpError = require("http-errors");
const sequelize = require("sequelize");
const { AUTO_ASSESS_BACKEND } = require("../../config/endpoints");
const createResponseObject = require("../../lib/createResponseObject");
const errorHandling = require("../../lib/errorHandling");
const { hashPassword } = require("../../lib/hashPassword");
const CaseStudy = require("../case-study/case-study.model");
const Class = require("../class/class.model");
const DbList = require("../db-list/db-list.model");
const LogSessionStudent = require("../log-session-student/log-session-student.model");
const Question = require("../question/question.model");
const Schedule = require("../schedule/schedule.model");
const Session = require("../session/session.model");
const sessionService = require("../session/session.service");
const Student = require("../student/student.model");
const TestUserAnswer = require("../test-user/test-user.model");

module.exports = {
    createUser: async () => {
        try {
            const testUserAnswerData = await TestUserAnswer.findAll({
                attributes: [sequelize.Sequelize.fn("DISTINCT", sequelize.Sequelize.col("name")), "name"],
                // attributes: ["name", "question_id", "answer", "type"],
            });
            let nim = 1741720030;
            const studentBulk = testUserAnswerData.map((val) => {
                let obj = {
                    username: nim,
                    nim,
                    password: hashPassword(String(nim)),
                    name: val.name,
                };
                nim++;
                return obj;
            });
            const studentBulkCreated = await Student.bulkCreate(studentBulk, { returning: true });

            // const studentsData = await testUserAnswerData.reduce(async (prev, curr) => {
            //     const arr = await prev;
            //     const data = await Student.findOne({ where: { name: curr.name } });
            //     arr.push(data);
            //     return arr;
            // }, Promise.resolve([]));

            const [dataClass, created] = await Class.findOrCreate({
                where: { name: "class old" },
                defaults: { semester: 8, user_id: 13 },
            });
            await dataClass.addStudents(studentBulkCreated);

            return createResponseObject(200, "success", "user created from old data");
        } catch (error) {
            return errorHandling(error);
        }
    },
    selectThreshold: async () => {
        try {
            const testUserAnswerData = await TestUserAnswer.findAll({
                // [sequelize.Sequelize.fn("DISTINCT", sequelize.Sequelize.col("name")), "name"],
                attributes: ["name", "question_id", "answer", "type"],
            });

            let dataClass = await Class.findByPk(63);
            let dataStudent = await dataClass.getStudents();
            let keys = ["single_key", "multi_key"];
            let thresholdArr = [0.8, 0.9];
            let dataa = await Promise.all(
                keys.map(async (eKeys) => {
                    await Promise.all(
                        thresholdArr.map(async (valThreshold) => {
                            const [newSchedule, created] = await Schedule.findOrCreate({
                                where: {
                                    container_id: 5,
                                    description: `schedule ${eKeys} ${valThreshold} threshold`,
                                    start: "2022-04-20T04:45:01.239Z",
                                    finish: "2022-05-28T04:50:01.239Z",
                                    type: "latihan",
                                    user_id: 5,
                                },
                            });

                            await newSchedule.addClasses(dataClass.id);
                            let dataCompleted = await Promise.all(
                                dataStudent.map(async (valDataStudent) => {
                                    let sessionCreated = await sessionService.insert(newSchedule.id, valDataStudent);
                                    if (sessionCreated.status == "error")
                                        throw createHttpError(sessionCreated.httpCode, sessionCreated.message);
                                    let sessionData = await Session.findByPk(sessionCreated.data.id);
                                    let dbList = await sessionData.getDbLists();
                                    dbList = dbList.map((e) => {
                                        return e.db_name;
                                    });
                                    let logData = await testUserAnswerData.reduce(async (prev, curr) => {
                                        let arr = await prev;
                                        if (valDataStudent.name != curr.name) return arr;
                                        const question = await Question.findByPk(curr.question_id);
                                        let queryMhs = String(curr.answer)
                                            .trim()
                                            .replaceAll(/[\n\t\r]/gm, " ")
                                            .replace(/[^a-zA-Z0-9|'|"|)]*$/gm, "");
                                        let dataObj = {
                                            session_id: sessionData.id,
                                            question_id: curr.question_id,
                                            answer: queryMhs,
                                            type: curr.type,
                                            similarity: -1.0,
                                            is_equal: 0,
                                        };
                                        let queryKey = JSON.parse(question.answer);
                                        if (eKeys == "single_key") queryKey = queryKey[0];
                                        let similarityResponse = await axios
                                            .post(`${AUTO_ASSESS_BACKEND}/api/v2/assessment/${eKeys}`, {
                                                dbList,
                                                queryMhs: queryMhs,
                                                queryKey: queryKey,
                                                threshold: valThreshold,
                                            })
                                            .then((data) => {
                                                return data;
                                            })
                                            .catch((error) => {
                                                return error.response;
                                            });
                                        dataObj.similarity = similarityResponse.data.data.similarity;
                                        dataObj.is_equal = similarityResponse.data.data.is_equal;
                                        arr.push(dataObj);
                                        return arr;
                                    }, Promise.all([]));
                                    let logDb = await LogSessionStudent.bulkCreate(logData, { returning: true });
                                    return logDb;
                                })
                            );
                            return dataCompleted;
                        })
                    );
                })
            );

            return createResponseObject(200, "success", "select dummy created from old data");
        } catch (error) {
            return errorHandling(error);
        }
    },
    selectKeys: async () => {
        try {
            // class id 74: class old
            const dataClass = await Class.findByPk(74);
            const dataStudent = await dataClass.getStudents();

            const testUserAnswerData = await TestUserAnswer.findAll({
                // [sequelize.Sequelize.fn("DISTINCT", sequelize.Sequelize.col("name")), "name"],
                attributes: ["name", "question_id", "answer", "type"],
            });

            let keys = [1, 2, 3];
            await Promise.all(
                keys.map(async (eKeys) => {
                    let descExtra = "only";
                    if (eKeys >= 3) descExtra = "or more";
                    let description = `pengujian select 4 ${eKeys} keys ${descExtra}`;

                    const scheduleData = await createSchedulePerKeys(5, dataClass, description);
                    let dataCompleted = await Promise.all(
                        dataStudent.map(async (valDataStudent) => {
                            const { sessionData, dbList } = await createSessionAndDb(scheduleData, valDataStudent);
                            let logData = await createLogPerKeySelect(
                                testUserAnswerData,
                                valDataStudent,
                                eKeys,
                                sessionData,
                                dbList
                            );
                            let logDb = await LogSessionStudent.bulkCreate(logData, { returning: true });
                            return logDb;
                        })
                    );
                    return dataCompleted;
                })
            );

            return createResponseObject(200, "success", "select dummy created from old data");
        } catch (error) {
            return errorHandling(error);
        }
    },
    insertKeys: async () => {
        try {
            // class id 73: TI-2D-2022
            let dataClass = await Class.findByPk(73);

            let sessionRaw = await Session.findAll({ where: { schedule_id: 65 }, include: { model: Student } });

            let keys = [1, 2, 3];
            await Promise.all(
                keys.map(async (eKeys) => {
                    let descExtra = "only";
                    if (eKeys >= 3) descExtra = "or more";

                    const [newSchedule, created] = await Schedule.findOrCreate({
                        where: {
                            container_id: 29,
                            description: `pengujian 4 insert ${eKeys} keys ${descExtra}`,
                            start: "2022-07-04T00:00:01.239Z",
                            finish: "2022-07-06T04:50:01.239Z",
                            type: "latihan",
                            user_id: 13,
                        },
                    });
                    await newSchedule.addClasses(dataClass.id);

                    let dataCompleted = await Promise.all(
                        sessionRaw.map(async (valSession) => {
                            const logPengujian = await LogSessionStudent.findAll({
                                where: { session_id: valSession.id },
                            });
                            let sessionCreated = await sessionService.insert(newSchedule.id, valSession.Student);
                            if (sessionCreated.status == "error")
                                throw createHttpError(sessionCreated.httpCode, sessionCreated.message);
                            let sessionData = await Session.findByPk(sessionCreated.data.id);
                            let dbList = await sessionData.getDbLists();
                            let logReady = [];
                            for (const log of logPengujian) {
                                const question = await Question.findByPk(log.question_id, {
                                    include: {
                                        model: CaseStudy,
                                        attributes: ["db_list_id"],
                                        include: { model: DbList, attributes: ["db_name"] },
                                    },
                                });
                                let dbListUse = dbList.map((e) => {
                                    let re = new RegExp(`_${sessionData.id}_${valSession.Student.id}_.*$`);
                                    let dbName = e.db_name.replace(re, "");
                                    if (dbName == question.CaseStudy.DbList.db_name) return e.db_name;
                                });
                                let queryMhs = String(log.answer)
                                    .trim()
                                    .replaceAll(/[\n\t\r]/gm, " ")
                                    .replace(/[^a-zA-Z0-9|'|"|)]*$/gm, "");
                                let dataObj = {
                                    session_id: sessionData.id,
                                    question_id: log.question_id,
                                    answer: queryMhs,
                                    answer_json: {},
                                    type: log.type,
                                    similarity: -1.0,
                                    is_equal: 0,
                                    timer: log.timer,
                                };
                                let queryKey = JSON.parse(question.answer);
                                if (eKeys < 3) queryKey = queryKey.slice(0, eKeys);
                                const resetedDb = await sessionService.reset(sessionData.id);
                                if (resetedDb.message == "database reset") {
                                    let similarityResponse = await axios
                                        .post(`${AUTO_ASSESS_BACKEND}/api/v2/assessment/multi_key`, {
                                            dbList: dbListUse,
                                            queryMhs: queryMhs,
                                            queryKey: queryKey,
                                            threshold: 0.7,
                                        })
                                        .then(async (data) => {
                                            return data;
                                        })
                                        .catch((error) => {
                                            return error.response;
                                        });

                                    dataObj.similarity = similarityResponse.data.data.similarity;
                                    dataObj.is_equal = similarityResponse.data.data.is_equal;
                                    logReady.push(dataObj);
                                }
                            }
                            let logDb = await LogSessionStudent.bulkCreate(logReady, { returning: true });
                            return logDb;
                        })
                    );
                    return dataCompleted;
                })
            );

            return createResponseObject(200, "success", "insert dummy created from old data");
        } catch (error) {
            return errorHandling(error);
        }
    },
};

async function createSchedulePerKeys(containerId, dataClass, description) {
    const [newSchedule, created] = await Schedule.findOrCreate({
        where: {
            container_id: containerId,
            description: description,
            start: "2022-07-04T00:00:01.239Z",
            finish: "2022-07-06T04:50:01.239Z",
            type: "latihan",
            user_id: 13,
        },
    });
    await newSchedule.addClasses(dataClass.id);
    return newSchedule;
}

async function createSessionAndDb(newSchedule, student) {
    let sessionCreated = await sessionService.insert(newSchedule.id, student);
    if (sessionCreated.status == "error") throw createHttpError(sessionCreated.httpCode, sessionCreated.message);
    let sessionData = await Session.findByPk(sessionCreated.data.id);
    let dbList = await sessionData.getDbLists();
    dbList = dbList.map((e) => {
        return e.db_name;
    });
    return { sessionData, dbList };
}

async function createLogPerKeySelect(testUserAnswerData, valDataStudent, eKeys, sessionData, dbList) {
    return await testUserAnswerData.reduce(async (prev, curr) => {
        let arr = await prev;
        if (valDataStudent.name != curr.name) return arr;
        const question = await Question.findByPk(curr.question_id);
        let queryMhs = String(curr.answer)
            .trim()
            .replaceAll(/[\n\t\r]/gm, " ")
            .replace(/[^a-zA-Z0-9|'|"|)]*$/gm, "");
        let dataObj = {
            session_id: sessionData.id,
            question_id: curr.question_id,
            answer: queryMhs,
            answer_json: {},
            type: curr.type,
            similarity: -1.0,
            is_equal: 0,
            // timer: curr.timer,
        };
        let queryKey = JSON.parse(question.answer);
        if (eKeys < 3) queryKey = queryKey.slice(0, eKeys);
        let similarityResponse = await axios
            .post(`${AUTO_ASSESS_BACKEND}/api/v2/assessment/multi_key`, {
                dbList,
                queryMhs: queryMhs,
                queryKey: queryKey,
                threshold: 0.6,
            })
            .then((data) => {
                return data;
            })
            .catch((error) => {
                return error.response;
            });
        dataObj.similarity = similarityResponse.data.data.similarity;
        dataObj.is_equal = similarityResponse.data.data.is_equal;
        arr.push(dataObj);
        return arr;
    }, Promise.all([]));
}
