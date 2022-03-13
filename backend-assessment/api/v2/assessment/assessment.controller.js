const assessmentService = require("./assessment.service");

module.exports = {
    multiKey: async (req, res) => {
        const { dbList, queryMhs, queryKey, threshold } = req.body;
        const responseObj = await assessmentService.multiKey(dbList, queryKey, queryMhs, threshold);
        const { httpCode, ...resp } = responseObj;

        if (responseObj.status != "succcess") return res.status(httpCode).json(resp);

        return res.status(httpCode).json(resp);
    },
    singleKey: async (req, res) => {
        const { dbList, queryMhs, queryKey, threshold } = req.body;
        const responseObj = await assessmentService.singleKey(dbList, queryKey, queryMhs, threshold);
        const { httpCode, ...resp } = responseObj;

        if (responseObj.status != "succcess") return res.status(httpCode).json(resp);

        return res.status(httpCode).json(resp);
    },
};
