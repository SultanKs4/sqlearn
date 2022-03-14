const createResponseObject = require("../../lib/createResponseObject");
const caseStudyService = require("./case-study.service");

module.exports = {
    index: async (req, res) => {
        const responseObject = await caseStudyService.getAll();
        const { httpCode, ...response } = responseObject;

        if (responseObject.status == "error") return res.status(httpCode).json(response);

        return res.status(httpCode).json(response);
    },
    show: async (req, res) => {
        const responseObject = await caseStudyService.getOne(req.params.id);
        const { httpCode, ...response } = responseObject;

        if (responseObject.status == "error") return res.status(httpCode).json(response);

        return res.status(httpCode).json(response);
    },
    showTable: async (req, res) => {
        const responseObject = await caseStudyService.getOneDetail(req.params.id, req.params.tablename);
        const { httpCode, ...response } = responseObject;

        if (responseObject.status == "error") return res.status(httpCode).json(response);

        return res.status(httpCode).json(response);
    },
    store: async (req, res) => {
        if (!req.file) {
            return res.status(400).json({
                status: "fail",
                message: "Format file tidak didukung",
                data: null,
            });
        }

        const responseObject = await caseStudyService.store(req.body.name, req.user, req.file);
        const { httpCode, ...response } = responseObject;

        if (responseObject.status == "error") return res.status(httpCode).json(response);

        return res.status(httpCode).json(response);
    },
    destroy: async (req, res) => {
        const responseObject = await caseStudyService.deleteOne(req.params.id);
        const { httpCode, ...response } = responseObject;

        if (responseObject.status == "error") return res.status(httpCode).json(response);

        return res.status(httpCode).json(response);
    },
};
