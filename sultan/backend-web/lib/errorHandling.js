const createHttpError = require("http-errors");
const createResponseObject = require("./createResponseObject");
const axios = require("axios");

module.exports = (error) => {
    let code = 500;
    let message = error.message;
    let data = null;
    if (axios.isAxiosError(error) && error.response) {
        let axiosData = error.response.data;
        message = axiosData.message;
        data = axiosData.data;
    } else if (createHttpError.isHttpError(error)) code = error.statusCode;

    return createResponseObject(code, "error", message, data);
};
