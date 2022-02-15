const { param, body } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkId = param("id", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkTableName = param("tablename", "cannot null")
    .notEmpty()
    .bail()
    .isString()
    .withMessage("must be string")
    .trim()
    .toLowerCase();
const checkNameBody = body("name", "cannot null")
    .notEmpty()
    .bail()
    .isString()
    .withMessage("must be string")
    .trim()
    .toLowerCase();

module.exports = {
    checkIdOnly: [checkId, validationHandle],
    getOneDetail: [checkId, checkTableName, validationHandle],
    store: [checkNameBody, validationHandle],
};
