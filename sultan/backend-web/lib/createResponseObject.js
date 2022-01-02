function createResponseObject(success, message, data = null) {
    return {
        success,
        message,
        data
    }
}

module.exports = createResponseObject