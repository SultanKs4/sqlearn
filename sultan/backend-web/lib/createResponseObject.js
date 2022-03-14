module.exports = (httpCode = 0, status, message, data = null) => {
    return {
        httpCode,
        status,
        message,
        data,
    };
};
