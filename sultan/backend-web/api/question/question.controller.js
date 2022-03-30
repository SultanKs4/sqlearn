const questionService = require("./question.service");

module.exports = {
    index: async (req, res) => {
        const resObj = await questionService.getAll(req.query);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    indexExclude: async (req, res) => {
        const resObj = await questionService.getAllExclude(req.params.container, req.query);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    indexRandomSession: async (req, res) => {
        const resObj = await questionService.getOneRandomBySession(
            req.user,
            req.body.session_id,
            req.body.question_answered
        );
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    show: async (req, res) => {
        const resObj = await questionService.getOne(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    store: async (req, res) => {
        if (!req.file)
            return res.status(400).json({
                status: "fail",
                message: "Format file tidak didukung",
                data: null,
            });
        const resObj = await questionService.insert(req.body, req.file.filename, req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    update: async (req, res) => {
        if (!req.file)
            return res.status(400).json({
                status: "fail",
                message: "Format file tidak didukung",
                data: null,
            });
        const resObj = await questionService.update(req.params.id, req.body, req.file.filename, req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    destroy: async (req, res) => {
        const resObj = await questionService.deleteOne(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
};
