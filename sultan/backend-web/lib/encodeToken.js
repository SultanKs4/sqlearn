const jwt = require("jsonwebtoken");
const Student = require("../api/student/student.model");
const User = require("../api/user/user.model");

const JWT_SECRET = "ini_secret";
const JWT_ROLES = {
    dosen: "dosen",
    mahasiswa: "mahasiswa",
    admin: "admin",
};

function encodeJWT(id, role) {
    const data = {
        id,
        role,
    };
    return jwt.sign({ data }, JWT_SECRET);
}

async function verifyJWT(token) {
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        const { id, role } = payload.data;

        let user = null;
        if (role == JWT_ROLES.dosen || role == JWT_ROLES.admin) {
            user = await User.findByPk(id, {
                attributes: {
                    exclude: ["password"],
                },
                raw: true,
            });
        } else if (role == JWT_ROLES.mahasiswa) {
            user = await Student.findByPk(id, {
                attributes: {
                    exclude: ["password"],
                },
                raw: true,
            });
        }

        if (!user) throw new Error("user not found");

        user["role"] = role;
        return user;
    } catch (error) {
        return error;
    }
}

module.exports = {
    encodeJWT,
    verifyJWT,
    JWT_ROLES,
};
