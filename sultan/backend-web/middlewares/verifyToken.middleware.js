const createResponseObject = require("../lib/createResponseObject")
const { verifyJWT } = require("../lib/encodeToken")

async function verifyToken(req, res, next) {
    // console.log(req.headers)
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(' ')[1]
        const user = await verifyJWT(token)

        if (!user) return res.status(500).json(createResponseObject(false, "Gagal mengautorisasi user"))
        req.user = user
        next()
    } else {
        // req.user = {
        //     id: 1,
        //     username: "dosen1"
        // }
        // next()
        return res.status(500).json(createResponseObject(false, "Gagal mengautorisasi user"))
    }
}

module.exports = verifyToken