const { validationResult } = require("express-validator");

const createResponseObject = require("../lib/createResponseObject");

module.exports = (req, res, next) => {
    try {
        validationResult(req).throw();
        next();
    } catch (error) {
        const resp = createResponseObject(400, "error", "validation failed", error.mapped());
        const { httpCode, ...response } = resp;
        res.status(httpCode).json(response);
    }
};
