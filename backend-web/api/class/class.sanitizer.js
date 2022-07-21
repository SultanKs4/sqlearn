const { body, param, query } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkId = param("id", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkMhsId = param("mhsid", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkNameBody = body("name", "cannot empty").notEmpty().trim();
const checkSemesterBody = body("semester", "cannot empty").notEmpty().bail().isInt().withMessage("must be number");
const checkNimBody = body("nim", "cannot empty").notEmpty().trim();

module.exports = {
    checkIdOnly: [checkId, validationHandle],
    checkPost: [checkNameBody, checkSemesterBody, validationHandle],
    checkPut: [checkId, checkNameBody, checkSemesterBody, validationHandle],
    checkAddStudent: [checkId, checkNameBody, checkNimBody, validationHandle],
    checkDelStudent: [checkId, checkMhsId, validationHandle],
};
