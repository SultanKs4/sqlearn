const loginService = require("./login.service");

module.exports = {
    auth: async (req, res) => {
        const { username, password } = req.body;
        const resObj = await loginService.authentication(username, password);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
};
