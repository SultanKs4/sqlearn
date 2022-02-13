const containerService = require("./container.service");

module.exports = {
    index: async (req, res) => {
        const resObj = await containerService.getAll();

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    show: async (req, res) => {
        const resObj = await containerService.getOne(req.params.id);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    store: async (req, res) => {
        const resObj = await containerService.insert(req.body, req.user);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },

    update: async (req, res) => {
        const resObj = await containerService.update(req.params.id, req.body);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    addQuestion: async (req, res) => {
        const resObj = await containerService.addQuestion(req.params.id, req.body);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },

    removeQuestion: async (req, res) => {
        const resObj = await containerService.removeQuestion(req.params.id, req.params.question);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    destroy: async (req, res) => {
        const resObj = await containerService.destroy(req.params.id);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(204).json(resObj);
    },
};
