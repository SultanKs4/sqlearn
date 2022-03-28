const createHttpError = require("http-errors");
const createResponseObject = require("../../lib/createResponseObject");
const errorHandling = require("../../lib/errorHandling");
const Question = require("../question/question.model");
const Session = require("../session/session.model");
const LogSessionStudent = require("./log-session-student.model");

module.exports = {
    index: async () => {
        try {
            const logData = await LogSessionStudent.findAll();
            if (logData.length == 0) throw createHttpError(404, "data log not found");

            return createResponseObject(200, "success", "data log didapatkan", logData);
        } catch (error) {
            return errorHandling(error);
        }
    },
    show: async (id) => {
        try {
            const logDataDetail = await LogSessionStudent.findByPk(id, {
                include: [{ model: Session }, { model: Question }],
            });
            if (!logDataDetail) throw createHttpError(404, "data log not found");
            return createResponseObject(200, "success", "data log didapatkan", logDataDetail);
        } catch (error) {
            return errorHandling(error);
        }
    },
    store: async (body) => {
        try {
            const { session_id, question_id, log } = body;

            await Session.findByPk(session_id).then((data) => {
                if (!data) throw createHttpError(404, "data session not found");
            });
            await Question.findByPk(question_id).then((data) => {
                if (!data) throw createHttpError(404, "data question not found");
            });

            const dataLog = log.map((val) => {
                return {
                    session_id,
                    question_id,
                    answer: val.answer,
                    answer_json: val.answer_json,
                    type: val.type,
                    similarity: null,
                    is_equal: 0,
                    timer: val.timer,
                };
            });

            await LogSessionStudent.bulkCreate(dataLog);
            return createResponseObject(201, "success", "new log created");
        } catch (error) {
            return errorHandling(error);
        }
    },
};
