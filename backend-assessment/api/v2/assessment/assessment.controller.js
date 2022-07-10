const assessmentService = require("./assessment.service");

module.exports = {
    multiKey: async (req, res) => {
        const { dbList, queryMhs, queryKey, threshold } = req.body;
        const responseObj = await assessmentService.multiKey(dbList, queryKey, queryMhs, threshold);
        const { httpCode, ...resp } = responseObj;

        return res.status(httpCode).json(resp);
    },
    singleKey: async (req, res) => {
        let { dbList, queryMhs, queryKey, threshold } = req.body;

        queryKey = queryKey.map((val) => {
            return String(val)
                .trim()
                .replaceAll(/[\n\t\r]/gm, " ")
                .replace(/[^a-zA-Z0-9|'|"|)]*$/gm, "");
        });
        queryMhs = String(queryMhs)
            .trim()
            .replaceAll(/[\n\t\r]/gm, " ")
            .replace(/[^a-zA-Z0-9|'|"|)]*$/gm, "");
        const responseObj = await assessmentService.singleKey(dbList, queryKey, queryMhs, threshold);
        const { httpCode, ...resp } = responseObj;

        return res.status(httpCode).json(resp);
    },
};
