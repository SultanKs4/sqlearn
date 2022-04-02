const { body, param } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkId = param("id", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkScheduleId = param("scheduleid", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkAnswerBodyInteger = body(["session_id", "question_id"], "cannot null")
    .notEmpty()
    .bail()
    .isInt()
    .withMessage("must be number");
const checkAnswerLog = body("log", "cannot null").notEmpty().bail().isArray();

module.exports = {
    checkIdOnly: [checkId, validationHandle],
    checkStore: [checkScheduleId, validationHandle],
    checkAnswer: [checkAnswerBodyInteger, checkAnswerLog, validationHandle],
};
