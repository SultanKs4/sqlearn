const createResponseObject = require("../lib/createResponseObject");
const { verifyJWT } = require("../lib/encodeToken");

async function verifyToken(req, res, next) {
    // console.log(req.headers)
    try {
        const bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader == "undefined") throw new Error("headers authorization not found");
        const token = bearerHeader.split(" ")[1];
        const user = await verifyJWT(token);

        if (!user) return res.status(500).json(createResponseObject(false, "Gagal mengautorisasi user"));
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json(createResponseObject(false, "Gagal mengautorisasi user", error.message));
    }
}

module.exports = verifyToken;
