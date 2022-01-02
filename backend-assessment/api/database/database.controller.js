const databaseService = require("./database.service");

module.exports = {
    createDb: async (req, res) => {
        const { success, message, data } = await databaseService.createDb(
            req.body.dbname
        );

        if (!success) return res.status(500).json({ success, message });

        return res.status(200).json({ success, message, data });
    },
    dropDb: async (req, res) => {
        const { success, message, data } = await databaseService.dropDb(
            req.body.dbname
        );

        if (!success) return res.status(500).json({ success, message });

        return res.status(200).json({ success, message, data });
    },
};
