const loginService = require("./login.service");

module.exports = {
    auth: async (req, res) => {
        const { username, password } = req.body;
        const responseObject = await loginService.authentication(username, password);
        const { httpCode, ...response } = responseObject;

        if (responseObject.status == "error") return res.status(httpCode).json(response);

        return res.status(httpCode).json(response);
    },
};
