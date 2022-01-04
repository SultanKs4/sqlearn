const assessmentService = require("./assessment.service");

module.exports = {
    multiKey: async (req, res) => {
        const { queryMhs, queryKey, threshold } = req.body;
        const responseObj = await assessmentService.multiKey(req.params.dbname, queryKey, queryMhs, threshold);

        if (responseObj.status != "succcess") return res.status(500).json(responseObj);

        return res.status(200).json(responseObj);
    },
    singleKey: async (req, res) => {
        const { queryMhs, queryKey, threshold } = req.body;
        const responseObj = await assessmentService.singleKey(req.params.dbname, queryKey, queryMhs, threshold);

        if (responseObj.status != "succcess") return res.status(500).json(responseObj);

        return res.status(200).json(responseObj);
    },
};
