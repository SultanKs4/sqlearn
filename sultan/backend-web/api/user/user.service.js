const createHttpError = require("http-errors");
const createResponseObject = require("../../lib/createResponseObject");
const errorHandling = require("../../lib/errorHandling");
const { Op } = require("sequelize");
const { hashPassword, comparePassword } = require("../../lib/hashPassword");

const User = require("./user.model");

module.exports = {
    getAll: async (level = null) => {
        try {
            const users = await User.findAll({
                attributes: {
                    exclude: ["password"],
                },
                where: { level },
            });
            if (!users) throw createHttpError(404, "user not found");
            return createResponseObject(200, "success", "Data user berhasil didapatkan", users);
        } catch (error) {
            return errorHandling(error);
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
            return errorHandling(error);
        }
    },

    insert: async (username, no_induk, name, level) => {
        try {
            const [newUser, created] = await User.findOrCreate({
                where: { [Op.or]: [{ username }, { no_induk }] },
                defaults: { password: hashPassword(username), username, no_induk, name, level },
            });
            if (created) return createResponseObject(200, "success", "Data user berhasil ditambahkan", newUser);
            else throw createHttpError(409, "user already exist");
        } catch (error) {
            return errorHandling(error);
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
            return errorHandling(error);
        }
    },

    updatePassword: async (id, passwordOld, passwordNew) => {
        try {
            const user = await User.findByPk(id);
            if (!user) throw createHttpError(404, "user not found");

            const passwordOldMatch = comparePassword(passwordOld, user.password);
            if (!passwordOldMatch) throw createHttpError(400, "old password not match with password at database");

            user.password = hashPassword(passwordNew);
            await user.save();

            return createResponseObject(200, "success", "Password changed");
        } catch (error) {
            return errorHandling(error);
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
            return errorHandling(error);
        }
    },

    resetPassword: async (id) => {
        try {
            const user = await User.findByPk(id);
            if (!user) throw createHttpError(404, "user not found");

            user.password = hashPassword(user.username);
            await user.save();
            return createResponseObject(200, "success", "password reset");
        } catch (error) {
            return errorHandling(error);
        }
    },
};
