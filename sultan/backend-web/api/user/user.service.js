const createResponseObject = require("../../lib/createResponseObject");
const { encodeJWT, JWT_ROLES } = require("../../lib/encodeToken");
const { hashPassword, comparePassword } = require("../../lib/hashPassword");

const User = require("./user.model");


module.exports = {
    getAll: async () => {
        try {
            const users = await User.findAll({
                attributes: {
                    exclude: ['password']
                }
            })
            return createResponseObject(true, "Data user berhasil didapatkan", users);
        } catch (error) {
            return createResponseObject(false, "Data user gagal didapatkan");
        }
    },

    getOne: async (id) => {
        try {
            const user = await User.findByPk(id, {
                attributes: {
                    exclude: ['password']
                }
            })
            return createResponseObject(true, "Data user berhasil didapatkan", user)
        } catch (error) {
            console.error(error)
            return createResponseObject(false, "Data user gagal didapatkan");
        }
    },

    authenticate: async (data) => {
        try {
            const { username, password } = data

            const user = await User.findOne({
                where: {
                    username
                },
                raw: true
            })
            if (!user) return createResponseObject(false, "Tidak ada username yang cocok");

            const isPasswordMatch = comparePassword(password, user.password)
            if (!isPasswordMatch) return createResponseObject(false, "Password salah");

            const jwt = encodeJWT(user.id, JWT_ROLES.dosen)

            const { password: passDb, ...rest } = user
            const userResponse = { ...rest, role: "dosen" }

            return createResponseObject(true, "Login berhasil dilakukan", { token: jwt, user: userResponse })
        } catch (error) {
            console.error(error)
            return createResponseObject(false, "Login gagal dilakukan");
        }
    },

    insert: async (data) => {
        try {
            let newUser = await User.create({
                username: data.username,
                password: hashPassword(data.password),
                no_induk: data.no_induk,
                name: data.name,
            })
            return createResponseObject(true, "Data user berhasil ditambahkan", newUser)
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data user gagal ditambahkan")
        }
    },

    update: async (id, data) => {
        try {
            const user = await User.findByPk(id, {
                attributes: {
                    exclude: ['password']
                }
            })
            if (!user) return createResponseObject(false, "Tidak ada data user didapatkan");

            Object.keys(data).forEach(val => {
                user[val] = data[val]
            })

            await user.save()

            return createResponseObject(true, "Data user berhasil diperbarui", user);
        } catch (error) {
            return createResponseObject(false, "Data user gagal diperbarui");
        }
    },

    destroy: async (id) => {
        try {
            const user = await User.findByPk(id)
            if (!user) return createResponseObject(false, "Tidak ada user yang dihapus")

            await User.destroy({
                where: {
                    id
                }
            })

            return createResponseObject(true, "Data user berhasil dihapus")


        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data user gagal dihapus");
        }
    }

}