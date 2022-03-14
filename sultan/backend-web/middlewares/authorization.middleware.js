const createResponseObject = require("../lib/createResponseObject");

module.exports = function permission(...roles) {
    return (req, res, next) => {
        const { user } = req;

        if (user && roles.includes(user.role)) next();
        else {
            const resp = createResponseObject(401, "error", "roles unauthorized", null);
            const { httpCode, ...response } = resp;
            res.status(httpCode).json(response);
        }
    };
};
