const loginService = require("./login.service");

module.exports = {
    auth: async (req, res) => {
        const { username, password } = req.body;
        const resObj = await loginService.authentication(username, password);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },
};
