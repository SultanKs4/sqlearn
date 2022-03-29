const settingService = require("./setting.service");

/* TODO: Sanitizer , full postman docs (including bug fixes etc)*/

module.exports = {
    threshold: async (req, res) => {
        const resObj = await settingService.getThreshold();
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    thresholdUpdate: async (req, res) => {
        const resObj = await settingService.updateThreshold(req.body.threshold);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    getRules: async (req, res) => {
        const resObj = await settingService.getRules(req.query.type);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    addRules: async (req, res) => {
        const { attemps, value, type } = req.body;
        const resObj = await settingService.addRules(attemps, value, type);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    updateRules: async (req, res) => {
        const { attemps, value, type } = req.body;
        const resObj = await settingService.updateRules(req.params.id, attemps, value, type);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    deleteRules: async (req, res) => {
        const resObj = await settingService.deleteRules(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
};
