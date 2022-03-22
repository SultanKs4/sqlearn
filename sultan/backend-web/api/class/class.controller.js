const createResponseObject = require("../../lib/createResponseObject");
const classService = require("./class.service");
const ExcelJS = require("exceljs");

module.exports = {
    index: async (req, res) => {
        const resObj = await classService.getAll(req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    show: async (req, res) => {
        const resObj = await classService.getOne(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    store: async (req, res) => {
        const resObj = await classService.insert(req.body, req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    upload: async (req, res) => {
        if (!req.file) return res.status(400).json(createResponseObject("error", "Format file tidak disupport"));

        const resObj = await classService.convertExcel(req.body, req.user, req.file.path);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    update: async (req, res) => {
        const resObj = await classService.update(req.params.id, req.body, req.user);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    addStudent: async (req, res) => {
        const resObj = await classService.addStudent(req.params.id, req.body.students);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    removeStudent: async (req, res) => {
        const resObj = await classService.removeStudent(req.params.id, req.body.students);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },

    destroy: async (req, res) => {
        const resObj = await classService.destroy(req.params.id);
        const { httpCode, ...response } = resObj;

        return res.status(httpCode).json(response);
    },
};
