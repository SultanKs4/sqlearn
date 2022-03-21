const responseObj = require("../lib/responseObject");
module.exports = (req, res, next) => {
    const queryMhsLowerCase = req.body.queryMhs.toLowerCase();

    if (
        queryMhsLowerCase.includes("update ") ||
        queryMhsLowerCase.includes("delete ") ||
        queryMhsLowerCase.includes("alter") ||
        queryMhsLowerCase.includes("drop")
    ) {
        const { httpCode, ...resp } = responseObj(
            400,
            "fail",
            { similarity: -1, isEqual: false },
            "sistem hanya dapat menerima perintah SELECT dan INSERT"
        );
        return res.status(httpCode).json(resp);
    }
    next();
};
