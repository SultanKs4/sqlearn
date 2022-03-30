const userService = require("./user.service");

/* TODO: Sanitizer , full postman docs (including bug fixes etc)*/

module.exports = {
    index: async (req, res) => {
        const resObj = await userService.getAll();
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    show: async (req, res) => {
        const resObj = await userService.getOne(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    store: async (req, res) => {
        const { username, password, no_induk, name, level } = req.body;
        const resObj = await userService.insert(username, password, no_induk, name, level);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    update: async (req, res) => {
        const resObj = await userService.update(req.params.id, req.body);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    updatePassword: async (req, res) => {
        const resObj = await userService.updatePassword(req.params.id, req.body.password_old, req.body.password_new);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    destroy: async (req, res) => {
        const resObj = await userService.destroy(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    resetPassword: async (req, res) => {
        const resObj = await userService.resetPassword(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
};
