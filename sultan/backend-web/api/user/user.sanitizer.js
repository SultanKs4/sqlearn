const { param, body } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkPassword = body(["password_old", "password_new", "password_confirmation"], "cannot empty").notEmpty();
const checkPasswordLength = body(["password_new", "password_confirmation"]).isLength({ min: 8 });
const checkPasswordConfirmation = body("password_confirmation").custom((val, { req }) => {
    if (val != req.body.password_new) throw new Error("Password confirmation not match with new password");
    return true;
});

module.exports = {
    checkUpdatePassword: [checkPassword, checkPasswordLength, checkPasswordConfirmation, validationHandle],
};
