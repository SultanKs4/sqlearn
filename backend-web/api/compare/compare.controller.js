const compareService = require("./compare.service");

module.exports = {
    user: async (req, res) => {
        const responseObject = await compareService.createUser();
        const { httpCode, ...response } = responseObject;

        return res.status(httpCode).json(response);
    },
    selectThreshold: async (req, res) => {
        const responseObject = await compareService.selectThreshold();
        const { httpCode, ...response } = responseObject;

        return res.status(httpCode).json(response);
    },
    selectKeys: async (req, res) => {
        const responseObject = await compareService.selectKeys();
        const { httpCode, ...response } = responseObject;

        return res.status(httpCode).json(response);
    },
    insert: async (req, res) => {
        const responseObject = await compareService.insertKeys();
        const { httpCode, ...response } = responseObject;

        return res.status(httpCode).json(response);
    },
};
