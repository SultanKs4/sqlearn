const databaseService = require("./database.service");

module.exports = {
    createDb: async (req, res) => {
        const responseObj = await databaseService.createDb(req.params.dbname);
        const { httpCode, ...resp } = responseObj;

        if (responseObj.status != "success") return res.status(httpCode).json(resp);

        return res.status(httpCode).json(resp);
    },
    dropDb: async (req, res) => {
        const responseObj = await databaseService.dropDb(req.params.dbname);
        const { httpCode, ...resp } = responseObj;

        if (responseObj.status != "success") return res.status(httpCode).json(resp);

        return res.status(httpCode).json(resp);
    },
    descTable: async (req, res) => {
        const responseObj = await databaseService.descTable(req.params.dbname);
        const { httpCode, ...resp } = responseObj;

        if (responseObj.status != "success") return res.status(httpCode).json(resp);

        return res.status(httpCode).json(resp);
    },
    selectTable: async (req, res) => {
        const { dbname, table } = req.params;
        const responseObj = await databaseService.selectTable(dbname, table);
        const { httpCode, ...resp } = responseObj;

        if (responseObj.status != "success") return res.status(httpCode).json(resp);

        return res.status(httpCode).json(resp);
    },
};
