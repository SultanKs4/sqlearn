const createHttpError = require("http-errors");
const { JsonWebTokenError } = require("jsonwebtoken");
const createResponseObject = require("../lib/createResponseObject");
const { verifyJWT } = require("../lib/encodeToken");

async function verifyToken(req, res, next) {
    // console.log(req.headers)
    try {
        const bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader == "undefined") throw createHttpError(400, "headers authorization not found");
        const token = bearerHeader.split(" ")[1];
        const user = await verifyJWT(token);
        req.user = user;
        next();
    } catch (error) {
        let code = 500;
        let status = "fail";
        let message = null;
        let data = null;
        if (error instanceof JsonWebTokenError) {
            code = 400;
            message = error.message;
        } else if (createHttpError.isHttpError(error)) {
            code = error.statusCode;
            message = error.message;
        }
        const resp = createResponseObject(code, status, message, data);
        const { httpCode, ...response } = resp;
        res.status(httpCode).json(response);
    }
}

module.exports = verifyToken;
