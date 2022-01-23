module.exports = (status, data, message = null) => {
    return {
        status,
        message,
        data,
    };
};
