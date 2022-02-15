const { validationResult } = require("express-validator");

const createResponseObject = require("../lib/createResponseObject");

module.exports = (req, res, next) => {
    try {
        validationResult(req).throw();
        next();
    } catch (error) {
        res.status(400).json(createResponseObject("error", "validation failed", error.mapped()));
    }
};
