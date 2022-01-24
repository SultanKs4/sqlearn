const databaseService = require("./database.service");

module.exports = {
    createDb: async (req, res) => {
        const responseObj = await databaseService.createDb(req.params.dbname);

        if (responseObj.status != "success") return res.status(500).json(responseObj);

        return res.status(200).json(responseObj);
    },
    dropDb: async (req, res) => {
        const responseObj = await databaseService.dropDb(req.params.dbname);

        if (responseObj.status != "success") return res.status(500).json(responseObj);

        return res.status(200).json(responseObj);
    },
    descTable: async (req, res) => {
        const responseObj = await databaseService.descTable(req.params.dbname);

        if (responseObj.status != "success") return res.status(500).json(responseObj);

        return res.status(200).json(responseObj);
    },
    selectTable: async (req, res) => {
        const { dbname, table } = req.params;
        const responseObj = await databaseService.selectTable(dbname, table);

        if (responseObj.status != "success") return res.status(500).json(responseObj);

        return res.status(200).json(responseObj);
    },
};
