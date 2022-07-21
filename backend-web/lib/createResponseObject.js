module.exports = (httpCode, status, message, data = null) => {
    return {
        httpCode,
        status,
        message,
        data,
    };
};
