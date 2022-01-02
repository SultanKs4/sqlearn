const jwt = require('jsonwebtoken')
const Student = require('../api/student/student.model')
const User = require('../api/user/user.model')

const JWT_SECRET = 'ini_secret'
const JWT_ROLES = {
    dosen: "dosen",
    mahasiswa: "mahasiswa"
}

function encodeJWT(id, role) {
    const data = {
        id, role
    }
    return jwt.sign({ data }, JWT_SECRET)
}

async function verifyJWT(token) {
    const payload = jwt.verify(token, JWT_SECRET)
    const { id, role } = payload.data

    let user
    if (role == "dosen") {
        user = await User.findByPk(id, {
            attributes: {
                exclude: ["password"]
            },
            raw: true
        })
    } else {
        user = await Student.findByPk(id, {
            attributes: {
                exclude: ["password"]
            },
            raw: true
        })
    }
    if (!user) return null

    user['role'] = role
    return user
}

module.exports = {
    encodeJWT,
    verifyJWT,
    JWT_ROLES
}