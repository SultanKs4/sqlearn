const createHttpError = require("http-errors");
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
            if (!users) throw createHttpError(404, "user not found");
            return createResponseObject(200, "success", "Data user berhasil didapatkan", users);
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            return createResponseObject(code, "error", message, data);
        }
    },

    getOne: async (id) => {
        try {
            const user = await User.findByPk(id, {
                attributes: {
                    exclude: ["password"],
                },
            });
            if (!user) throw createHttpError(404, "user not found");
            return createResponseObject(200, "success", "Data user berhasil didapatkan", user);
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            if (createHttpError.isHttpError(error)) code = error.statusCode;

            return createResponseObject(code, "error", message, data);
        }
    },

    insert: async (username, password, no_induk, name, level = "dosen") => {
        try {
            const [newUser, created] = await User.findOrCreate({
                where: {
                    username: username,
                },
                defaults: { password: hashPassword(password), no_induk, name, level },
            });
            if (created) return createResponseObject(200, "success", "Data user berhasil ditambahkan", newUser);
            else throw createHttpError(409, "user already exist");
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            if (createHttpError.isHttpError(error)) code = error.statusCode;

            return createResponseObject(code, "error", message, data);
        }
    },

    update: async (id, data) => {
        try {
            const user = await User.findByPk(id, {
                attributes: {
                    exclude: ["password"],
                },
            });
            if (!user) throw createHttpError(404, "Tidak ada data user didapatkan");

            Object.keys(data).forEach((val) => {
                user[val] = data[val];
            });

            await user.save();

            return createResponseObject(200, "success", "Data user berhasil diperbarui", user);
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            if (createHttpError.isHttpError(error)) code = error.statusCode;

            return createResponseObject(code, "error", message, data);
        }
    },

    destroy: async (id) => {
        try {
            const user = await User.findByPk(id);
            if (!user) throw createHttpError(404, "Tidak ada data user didapatkan");

            await User.destroy({
                where: {
                    id,
                },
            });

            return createResponseObject(200, "success", "Data user berhasil dihapus");
        } catch (error) {
            console.log(error);
            let code = 500;
            let message = error.message;
            let data = null;
            if (createHttpError.isHttpError(error)) code = error.statusCode;

            return createResponseObject(code, "error", message, data);
        }
    },
};
