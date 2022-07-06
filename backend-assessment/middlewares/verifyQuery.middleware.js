const responseObj = require("../lib/responseObject");
module.exports = (req, res, next) => {
    const queryMhsLowerCase = req.body.queryMhs.toLowerCase();

    if (!/^insert|select/gim.test(queryMhsLowerCase)) {
        const { httpCode, ...resp } = responseObj(
            400,
            "fail",
            { similarity: -1, is_equal: false },
            "sistem hanya dapat menerima perintah SELECT dan INSERT"
        );
        return res.status(httpCode).json(resp);
    }
    next();
};
