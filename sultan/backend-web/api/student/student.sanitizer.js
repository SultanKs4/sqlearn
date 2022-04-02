const { param, body } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkIdParams = param("id", "cannot null").notEmpty().bail().isInt().withMessage("must be integer");
const checkNameBody = body("name", "cannot null").notEmpty();
const checkNimBody = body("nim").optional().isInt();
const checkPassword = body(["password_old", "password_new", "password_confirmation"], "cannot empty").notEmpty();
const checkPasswordLength = body(["password_new", "password_confirmation"]).isLength({ min: 8 });
const checkPasswordConfirmation = body("password_confirmation").custom((val, { req }) => {
    if (val != req.body.password_new) throw new Error("Password confirmation not match with new password");
    return true;
});
const checkClassId = param("class", "cannot null").notEmpty().bail().isInt().withMessage("must be integer");

module.exports = {
    checkIdOnly: [checkIdParams, validationHandle],
    checkClass: [checkClassId, validationHandle],
    checkPost: [checkNameBody, checkNimBody, validationHandle],
    checkPut: [checkIdParams, checkNameBody, validationHandle],
    checkUpdatePassword: [
        checkIdParams,
        checkPassword,
        checkPasswordLength,
        checkPasswordConfirmation,
        validationHandle,
    ],
};
