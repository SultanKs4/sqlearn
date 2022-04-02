const scoreService = require("./score.service");

/* TODO: Sanitizer , full postman docs (including bug fixes etc)*/

module.exports = {
    indexStudents: async (req, res) => {
        const resObj = await scoreService.getAllByStudent(req.user, req.query.kelas);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    indexDosen: async (req, res) => {
        const resObj = await scoreService.getAllByDosen(req.params.classId, req.params.scheduleId);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    show: async (req, res) => {
        const resObj = await scoreService.getOne(req.params.studentId, req.params.scheduleId);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
};
