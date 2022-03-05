const createResponseObject = require("../../lib/createResponseObject");
const { encodeJWT, JWT_ROLES } = require("../../lib/encodeToken");
const { hashPassword, comparePassword } = require("../../lib/hashPassword");
const Student = require("../student/student.model");
const User = require("../user/user.model");

function checkPasswordAndEncodeJwt(password, user, role) {
    const isPasswordMatch = comparePassword(password, user.password);
    if (!isPasswordMatch) throw new Error("username and password combination not match");

    const jwt = encodeJWT(user.id, role);
    const { password: passDb, ...userData } = user;
    return { token: jwt, user: { ...userData, role } };
}

module.exports = {
    authentication: async (username, password) => {
        try {
            let payloadResponse = null;
            let user = await Student.findOne({ where: { username }, raw: true });
            if (user) payloadResponse = checkPasswordAndEncodeJwt(password, user, JWT_ROLES.mahasiswa);

            user = await User.findOne({ where: { username, level: JWT_ROLES.dosen }, raw: true });
            if (user) payloadResponse = checkPasswordAndEncodeJwt(password, user, JWT_ROLES.dosen);

            user = await User.findOne({ where: { username, level: JWT_ROLES.admin }, raw: true });
            if (user) payloadResponse = checkPasswordAndEncodeJwt(password, user, JWT_ROLES.admin);

            if (!payloadResponse) throw new Error("username not found");

            return createResponseObject("success", "login success", payloadResponse);
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "login gagal",
                error == null ? null : error.message ? error.message : error
            );
        }
    },
};
