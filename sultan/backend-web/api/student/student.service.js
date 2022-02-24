const { Op } = require("sequelize");
const createResponseObject = require("../../lib/createResponseObject");
const { encodeJWT, JWT_ROLES } = require("../../lib/encodeToken");
const { hashPassword, comparePassword } = require("../../lib/hashPassword");
const Class = require("../class/class.model");
const StudentClass = require("../student-class/student-class.model");
const Student = require("./student.model");

module.exports = {
    getAll: async () => {
        try {
            const classes = await Student.findAll({
                attributes: {
                    exclude: ["password"],
                },
            });
            return createResponseObject(true, "Data mahasiswa berhasil didapatkan", classes);
        } catch (error) {
            return createResponseObject(false, "Data mahasiswa gagal didapatkan");
        }
    },
    getAllExclude: async (classId) => {
        try {
            const studentClasses = await StudentClass.findAll({
                where: {
                    class_id: classId,
                },
                raw: true,
            });

            const existedStudents = studentClasses.map((val) => val.student_id);

            const students = await Student.findAll({
                attributes: {
                    exclude: ["password"],
                },
                where: {
                    id: {
                        [Op.notIn]: existedStudents,
                    },
                },
            });
            return createResponseObject(true, "Data mahasiswa berhasil didapatkan", students);
        } catch (error) {
            return createResponseObject(false, "Data mahasiswa gagal didapatkan");
        }
    },
    getOne: async (id) => {
        try {
            const student = await Student.findByPk(id, {
                attributes: {
                    exclude: ["password"],
                },
                include: [
                    {
                        model: Class,
                        as: "classes",
                        through: { attributes: [] },
                    },
                ],
            });
            return createResponseObject(true, "Data mahasiswa berhasil didapatkan", student);
        } catch (error) {
            return createResponseObject(false, "Data mahasiswa gagal didapatkan");
        }
    },
    authenticate: async (data) => {
        try {
            const { username, password } = data;

            const user = await Student.findOne({
                where: {
                    username,
                },
                raw: true,
            });
            if (!user) return createResponseObject(false, "Tidak ada username yang cocok");

            const isPasswordMatch = comparePassword(password, user.password);
            if (!isPasswordMatch) return createResponseObject(false, "Password salah");

            const jwt = encodeJWT(user.id, JWT_ROLES.mahasiswa);

            const { password: passDb, ...rest } = user;
            const userResponse = { ...rest, role: "mahasiswa" };

            return createResponseObject(true, "Login berhasil dilakukan", { token: jwt, user: userResponse });
        } catch (error) {
            console.error(error);
            return createResponseObject(false, "Login gagal dilakukan");
        }
    },
    insert: async (data) => {
        try {
            const student = await Student.findOne({
                where: {
                    nim: data.nim,
                },
            });
            if (student) return createResponseObject(false, "Data mahasiswa dengan nim tersebut sudah ada");

            let newStudent = await Student.create({
                username: data.nim,
                password: hashPassword(data.nim),
                nim: data.nim,
                name: data.name,
            });

            return createResponseObject(true, "Data mahasiswa baru berhasil ditambahkan", newStudent);
        } catch (error) {
            console.log(error);
            return createResponseObject(false, "Data mahasiswa baru gagal ditambahkan", newClass);
        }
    },
    update: async (id, data) => {
        try {
            const student = await Student.findByPk(id);
            if (!student) return createResponseObject(false, "Tidak ada data mahasiswa yang didapatkan");

            Object.keys(data).forEach((val) => {
                student[val] = data[val];
            });

            await student.save();

            return createResponseObject(true, "Data kelas berhasil diperbarui", student);
        } catch (error) {
            return createResponseObject(false, "Data kelas gagal diperbarui");
        }
    },
    destroy: async (id) => {
        try {
            const student = await Student.findByPk(id);
            if (!student) return createResponseObject(false, "Tidak ada mahasiswa yang dihapus");

            await Student.destroy({
                where: {
                    id,
                },
            });

            return createResponseObject(true, "Data mahasiswa berhasil dihapus");
        } catch (error) {
            console.log(error);
            return createResponseObject(false, "Data mahasiswa gagal dihapus");
        }
    },
};
