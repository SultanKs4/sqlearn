const { body, param, query } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkId = param("id", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkMhsId = param("mhsid", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkNameBody = body("name", "cannot empty").notEmpty().trim();
const checkSemesterBody = body("semester", "cannot empty").notEmpty().bail().isInt().withMessage("must be number");
const checkStudentsId = body("students", "cannot empty")
    .notEmpty()
    .bail()
    .isArray()
    .withMessage("must be array")
    .custom((val) => {
        val.forEach((v) => {
            if (typeof v != "number") throw new Error("Element array not number");
        });
        return true;
    });

module.exports = {
    checkIdOnly: [checkId, validationHandle],
    checkPost: [checkNameBody, checkSemesterBody, validationHandle],
    checkPut: [checkId, checkNameBody, checkSemesterBody, validationHandle],
    checkAddStudent: [checkId, checkStudentsId, validationHandle],
    checkDelStudent: [checkId, checkMhsId, validationHandle],
};
