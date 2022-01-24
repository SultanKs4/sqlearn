const createResponseObject = require("../../lib/createResponseObject");
const { encodeJWT, JWT_ROLES } = require("../../lib/encodeToken");
const { hashPassword, comparePassword } = require("../../lib/hashPassword");

const User = require("./user.model");

module.exports = {
    getAll: async () => {
        try {
            const users = await User.findAll({
                attributes: {
                    exclude: ["password"],
                },
            });
            return createResponseObject(
                true,
                "Data user berhasil didapatkan",
                users
            );
        } catch (error) {
            return createResponseObject(false, "Data user gagal didapatkan");
        }
    },

    getOne: async (id) => {
        try {
            const user = await User.findByPk(id, {
                attributes: {
                    exclude: ["password"],
                },
            });
            return createResponseObject(
                true,
                "Data user berhasil didapatkan",
                user
            );
        } catch (error) {
            console.error(error);
            return createResponseObject(false, "Data user gagal didapatkan");
        }
    },

    authenticate: async (username, password) => {
        try {
            const user = await User.findOne({
                where: {
                    username,
                },
                raw: true,
            });
            if (!user) throw new Error("Username tidak ditemukan");

            const isPasswordMatch = comparePassword(password, user.password);
            if (!isPasswordMatch) throw new Error("Password salah");

            const jwt = encodeJWT(user.id, JWT_ROLES.dosen);

            const { password: passDb, ...rest } = user;
            const userResponse = { ...rest, role: "dosen" };

            return createResponseObject(true, "Login berhasil dilakukan", {
                token: jwt,
                user: userResponse,
            });
        } catch (error) {
            console.error(error);
            return createResponseObject(
                false,
                "Login gagal dilakukan",
                error.message
            );
        }
    },

    insert: async (username, password, no_induk, name) => {
        try {
            let newUser = await User.create({
                username: username,
                password: hashPassword(password),
                no_induk: no_induk,
                name: name,
            });
            return createResponseObject(
                true,
                "Data user berhasil ditambahkan",
                newUser
            );
        } catch (error) {
            console.log(error);
            return createResponseObject(
                false,
                "Data user gagal ditambahkan",
                error
            );
        }
    },

    update: async (id, data) => {
        try {
            const user = await User.findByPk(id, {
                attributes: {
                    exclude: ["password"],
                },
            });
            if (!user) throw new Error("Tidak ada data user didapatkan");

            Object.keys(data).forEach((val) => {
                user[val] = data[val];
            });

            await user.save();

            return createResponseObject(
                true,
                "Data user berhasil diperbarui",
                user
            );
        } catch (error) {
            return createResponseObject(
                false,
                "Data user gagal diperbarui",
                error.message
            );
        }
    },

    destroy: async (id) => {
        try {
            const user = await User.findByPk(id);
            if (!user) throw new Error("Tidak ada data user didapatkan");

            await User.destroy({
                where: {
                    id,
                },
            });

            return createResponseObject(true, "Data user berhasil dihapus");
        } catch (error) {
            console.log(error);
            return createResponseObject(
                false,
                "Data user gagal dihapus",
                error.message
            );
        }
    },
};
