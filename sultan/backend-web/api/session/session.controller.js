const sessionService = require("./session.service");

module.exports = {
    index: async (req, res) => {
        const resObj = await sessionService.getAll();
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    show: async (req, res) => {
        const resObj = await sessionService.getOne(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    store: async (req, res) => {
        const resObj = await sessionService.insert(req.params.scheduleid, req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    answer: async (req, res) => {
        const resObj = await sessionService.answer(req.body.session_id, req.body.question_id, req.body.log, req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    reset: async (req, res) => {
        const resObj = await sessionService.reset(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    grade: async (req, res) => {
        const resObj = await sessionService.grade(req.params.id, req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    clean: async (req, res) => {
        const resObj = await sessionService.clean();
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
};
