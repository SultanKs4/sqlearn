const scheduleService = require("./schedule.service");

module.exports = {
    index: async (req, res) => {
        const resObj = await scheduleService.getAll(req.user, req.query);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    indexByClass: async (req, res) => {
        const resObj = await scheduleService.getAllByClass(req.params.id);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    show: async (req, res) => {
        const resObj = await scheduleService.getOne(req.params.id);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    store: async (req, res) => {
        const resObj = await scheduleService.insert(req.body, req.user);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },

    update: async (req, res) => {
        const resObj = await scheduleService.update(req.params.id, req.body, req.user);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    destroy: async (req, res) => {
        const resObj = await scheduleService.destroy(req.params.id);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },
};
