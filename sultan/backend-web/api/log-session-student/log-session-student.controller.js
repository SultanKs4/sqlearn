const logSessionStudentService = require("./log-session-student.service");

module.exports = {
    index: async (req, res) => {
        const resObj = await logSessionStudentService.index();
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    show: async (req, res) => {
        const resObj = await logSessionStudentService.show(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
    store: async (req, res) => {
        const resObj = await logSessionStudentService.store(req.body);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
};
