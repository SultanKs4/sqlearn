const { body } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkUsername = body("username", "username cannot empty").notEmpty().trim();
const checkPassword = body("password", "password cannot empty")
    .notEmpty()
    .bail()
    .isLength({ min: 8 })
    .withMessage("password minimal 8 characters length");

module.exports = {
    checkLoginBody: [checkUsername, checkPassword, validationHandle],
};
