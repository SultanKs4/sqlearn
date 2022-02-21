const { param, body } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkId = param("id", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkLabelId = body("label_id", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkDescription = body("description", "cannot null").notEmpty();
const checkQuestionIds = body("questions", "cannot null")
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
const checkQuestionId = param("question", "cannot null").notEmpty().bail().isInt().withMessage("must be number");

module.exports = {
    checkIdOnly: [checkId, validationHandle],
    checkStore: [checkLabelId, checkDescription, validationHandle],
    checkUpdate: [checkId, checkLabelId, checkDescription, validationHandle],
    checkStoreQuestion: [checkId, checkQuestionIds, validationHandle],
    checkDestroyQuestion: [checkId, checkQuestionId, validationHandle],
};
