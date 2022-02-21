module.exports = (status, message, data = null) => {
    return {
        status,
        message,
        data,
    };
};
