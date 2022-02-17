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

module.exports = {
    checkIdOnly: [checkId, validationHandle],
    checkGetData: [checkId, checkCaseStudyQuery, validationHandle],
    checkContainer: [containerCheck, checkCaseStudyQuery, validationHandle],
    checkStore: [checkCaseStudyBodyString, checkCaseStudyBodyInt, validationHandle],
    checkUpdate: [checkId, checkCaseStudyBodyString, checkCaseStudyBodyInt, validationHandle],
};
