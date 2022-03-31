const { query, param, body } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkId = param("id", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const containerCheck = param("container", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkCaseStudyQuery = query(["dosen", "case_study"]).optional().isInt().withMessage("must be number");
const checkCaseStudyBodyString = body(["text", "answer", "tables"], "cannot null").notEmpty();
const checkCaseStudyBodyInt = body(["case_study", "label_id"], "cannot null")
    .notEmpty()
    .bail()
    .isInt()
    .withMessage("must be number");
const checkSqlPartsHints = body(["sql_parts", "sql_hints"]).if(body("label_id").equals("2")).notEmpty().isArray();
const checkAnswerArray = body("answer").isArray();

module.exports = {
    checkIdOnly: [checkId, validationHandle],
    checkQueryCaseOnly: [checkCaseStudyQuery, validationHandle],
    checkGetData: [checkId, checkCaseStudyQuery, validationHandle],
    checkContainer: [containerCheck, checkCaseStudyQuery, validationHandle],
    checkStore: [
        checkCaseStudyBodyString,
        checkAnswerArray,
        checkSqlPartsHints,
        checkCaseStudyBodyInt,
        validationHandle,
    ],
    checkUpdate: [
        checkId,
        checkCaseStudyBodyString,
        checkAnswerArray,
        checkSqlPartsHints,
        checkCaseStudyBodyInt,
        validationHandle,
    ],
};
