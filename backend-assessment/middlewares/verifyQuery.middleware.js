const responseObj = require("../lib/responseObject");
module.exports = (req, res, next) => {
    const queryMhsLowerCase = req.body.queryMhs.toLowerCase();

    if (
        queryMhsLowerCase.includes("update ") ||
        queryMhsLowerCase.includes("delete ") ||
        queryMhsLowerCase.includes("alter") ||
        queryMhsLowerCase.includes("drop")
    ) {
        return res
            .status(400)
            .json(
                responseObj(
                    "fail",
                    { similarity: -1, isEqual: false },
                    "sistem hanya dapat menerima perintah SELECT dan INSERT"
                )
            );
    }
    next();
};
