const scheduleService = require("./schedule.service");

module.exports = {
    index: async (req, res) => {
        const resObj = await scheduleService.getAll(req.user, req.query);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    indexByClass: async (req, res) => {
        const resObj = await scheduleService.getAllByClass(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    show: async (req, res) => {
        const resObj = await scheduleService.getOne(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    store: async (req, res) => {
        const resObj = await scheduleService.insert(req.body, req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    update: async (req, res) => {
        const resObj = await scheduleService.update(req.params.id, req.body, req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    destroy: async (req, res) => {
        const resObj = await scheduleService.destroy(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
};
