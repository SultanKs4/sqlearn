const studentService = require("./student.service");

/* TODO: Sanitizer , full postman docs (including bug fixes etc)*/

module.exports = {
    index: async (req, res) => {
        const resObj = await studentService.getAll();
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    indexExclude: async (req, res) => {
        const resObj = await studentService.getAllExclude(req.params.class);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    show: async (req, res) => {
        const resObj = await studentService.getOne(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    store: async (req, res) => {
        const resObj = await studentService.insert(req.body);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    update: async (req, res) => {
        const resObj = await studentService.update(req.params.id, req.body);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    updatePassword: async (req, res) => {
        const resObj = await studentService.updatePassword(req.params.id, req.body.password_old, req.body.password_new);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    destroy: async (req, res) => {
        const resObj = await studentService.destroy(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    resetPassword: async (req, res) => {
        const resObj = await studentService.resetPassword(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
};
