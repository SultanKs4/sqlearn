const createHttpError = require("http-errors");
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
            return createResponseObject(200, "success", "Data mahasiswa berhasil didapatkan", classes);
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            return createResponseObject(code, "error", message, data);
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
            return createResponseObject(200, "success", "Data mahasiswa berhasil didapatkan", students);
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            return createResponseObject(code, "error", message, data);
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
            return createResponseObject(200, "success", "Data mahasiswa berhasil didapatkan", student);
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            return createResponseObject(code, "error", message, data);
        }
    },
    insert: async (data) => {
        try {
            const [student, created] = await Student.findOrCreate({
                where: {
                    nim: data.nim,
                },
                defaults: {
                    username: data.nim,
                    password: hashPassword(data.nim),
                    name: data.name,
                },
            });
            if (created)
                return createResponseObject(200, "success", "Data mahasiswa baru berhasil ditambahkan", student);
            else throw createHttpError(409, "data student already exist");
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            return createResponseObject(code, "error", message, data);
        }
    },
    update: async (id, data) => {
        try {
            const student = await Student.findByPk(id);
            if (!student) throw createHttpError(404, "student not found");

            Object.keys(data).forEach((val) => {
                student[val] = data[val];
            });

            await student.save();

            return createResponseObject(200, "success", "Data kelas berhasil diperbarui", student);
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            return createResponseObject(code, "error", message, data);
        }
    },
    destroy: async (id) => {
        try {
            const student = await Student.findByPk(id);
            if (!student) throw createHttpError(404, "student not found");

            await Student.destroy({
                where: {
                    id,
                },
            });

            return createResponseObject(200, "success", "Data mahasiswa berhasil dihapus");
        } catch (error) {
            let code = 500;
            let message = error.message;
            let data = null;
            return createResponseObject(code, "error", message, data);
        }
    },
};
