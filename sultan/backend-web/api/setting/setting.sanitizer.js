const { body, param, query } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkIdParms = param("id", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkThreshold = body("threshold", "cannot null").notEmpty().bail().isNumeric().withMessage("must be numberic");
const checkQueryType = query("type").optional().isIn(["ujian", "latihan"]).withMessage("type must be ujian or latihan");
const checkBodyRules = body(["attemps", "value", "type"], "cannot null").notEmpty();
const checkBodyMustNumber = body(["attemps", "value"], "must be number").isInt();
const checkBodyTypeRules = body("type", "type must be ujian or latihan").isIn(["ujian", "latihan"]);

module.exports = {
    checkThresholdUpdate: [checkThreshold, validationHandle],
    checkGetRulesType: [checkQueryType, validationHandle],
    checkPostRules: [checkBodyRules, checkBodyMustNumber, checkBodyTypeRules, validationHandle],
    checkPutRules: [checkIdParms, checkBodyRules, checkBodyMustNumber, checkBodyTypeRules, validationHandle],
    checkIdOnly: [checkIdParms, validationHandle],
};
