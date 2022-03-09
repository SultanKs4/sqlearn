const sessionService = require("./session.service");

module.exports = {
    index: async (req, res) => {
        const resObj = await sessionService.getAll();

        if (resObj.success == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    show: async (req, res) => {
        const resObj = await sessionService.getOne(req.params.id);

        if (resObj.success == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    store: async (req, res) => {
        const resObj = await sessionService.insert(req.body, req.user);

        if (resObj.success == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },

    answer: async (req, res) => {
        const resObj = await sessionService.answer(req.params.id, req.params.question, req.body);

        if (resObj.success == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },

    grade: async (req, res) => {
        const resObj = await sessionService.grade(req.params.id, req.user);

        if (resObj.success == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },
};
