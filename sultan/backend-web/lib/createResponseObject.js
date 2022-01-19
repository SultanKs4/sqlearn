module.exports = (status, data, message = null) => {
    return {
        status,
        data,
        message,
    };
};
