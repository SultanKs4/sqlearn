const createResponseObject = require("../lib/createResponseObject");

module.exports = function permission(...roles) {
    return (req, res, next) => {
        const { user } = req;

        if (user && roles.includes(user.role)) next();
        else res.status(401).json(createResponseObject("error", "roles unauthorized"));
    };
};
