const createResponseObject = require("../../lib/createResponseObject");
const caseStudyService = require("./case-study.service");

module.exports = {
    index: async (req, res) => {
        const resObj = await caseStudyService.getAll();

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },
    show: async (req, res) => {
        const resObj = await caseStudyService.getOne(req.params.id);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },
    showTable: async (req, res) => {
        const resObj = await caseStudyService.getOneDetail(req.params.id, req.params.tablename);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },
    store: async (req, res) => {
        if (!req.file) return res.status(400).json(createResponseObject("fail", null, "Format file tidak didukung"));

        const resObj = await caseStudyService.store(req.body.name, req.user, req.file);
        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },
    destroy: async (req, res) => {
        const resObj = await caseStudyService.deleteOne(req.params.id);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },
};
