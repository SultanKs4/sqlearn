const { param, body, query } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkIdParams = param("id", "cannot null").notEmpty().bail().isInt().withMessage("must be integer");
const checkLevelQuery = query("level").optional().isIn(["dosen", "admin"]).withMessage("query must be dosen or admin");
const checkBodyPost = body(["name", "level", "no_induk", "username"], "cannot null").notEmpty();
const checkBodyPut = body(["name", "level"], "cannot null").notEmpty();
const checkNoInduk = body("no_induk", "must be number").isNumeric();
const checkPassword = body(["password_old", "password_new", "password_confirmation"], "cannot empty").notEmpty();
const checkPasswordLength = body(["password_new", "password_confirmation"]).isLength({ min: 8 });
const checkPasswordConfirmation = body("password_confirmation").custom((val, { req }) => {
    if (val != req.body.password_new) throw new Error("Password confirmation not match with new password");
    return true;
});

module.exports = {
    checkLevel: [checkLevelQuery, validationHandle],
    checkIdOnly: [checkIdParams, validationHandle],
    checkPost: [checkBodyPost, checkNoInduk, validationHandle],
    checkPut: [checkIdParams, checkBodyPut, validationHandle],
    checkUpdatePassword: [
        checkIdParams,
        checkPassword,
        checkPasswordLength,
        checkPasswordConfirmation,
        validationHandle,
    ],
};
