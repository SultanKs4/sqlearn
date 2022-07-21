const containerService = require("./container.service");

module.exports = {
    index: async (req, res) => {
        const resObj = await containerService.getAll();
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    show: async (req, res) => {
        const resObj = await containerService.getOne(req.params.id, req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    store: async (req, res) => {
        const resObj = await containerService.insert(req.body, req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    update: async (req, res) => {
        const resObj = await containerService.update(req.params.id, req.body, req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    addQuestion: async (req, res) => {
        const resObj = await containerService.addQuestion(req.params.id, req.body.questions);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    removeQuestion: async (req, res) => {
        const resObj = await containerService.removeQuestion(req.params.id, req.params.question);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    destroy: async (req, res) => {
        const resObj = await containerService.destroy(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
};
