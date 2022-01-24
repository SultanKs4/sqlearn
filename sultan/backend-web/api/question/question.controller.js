const createResponseObject = require("../../lib/createResponseObject");
const questionService = require("./question.service");

module.exports = {
    index: async (req, res) => {
        const resObj = await questionService.getAll(req.query);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },
    indexExclude: async (req, res) => {
        const resObj = await questionService.getAllExclude(
            req.params.container,
            req.query
        );

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },
    show: async (req, res) => {
        const resObj = await questionService.getOne(req.params.id);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },
    store: async (req, res) => {
        console.log(req.body);
        if (!req.file)
            return res
                .status(400)
                .json(
                    createResponseObject(false, "Format file tidak disupport")
                );
        const resObj = await questionService.insert(
            req.body,
            req.file.filename,
            req.user
        );

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },
    destroy: async (req, res) => {
        const resObj = await questionService.deleteOne(req.params.id);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },
};
