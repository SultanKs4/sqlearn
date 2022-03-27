module.exports = (httpCode, status, data, message = null) => {
    return {
        httpCode,
        status,
        data,
        message,
    };
};
