const createHttpError = require("http-errors");
const { Op } = require("sequelize");
const createResponseObject = require("../../lib/createResponseObject");
const errorHandling = require("../../lib/errorHandling");
const { hashPassword } = require("../../lib/hashPassword");
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
            return errorHandling(error);
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
            return errorHandling(error);
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
            return errorHandling(error);
        }
    },
    insert: async (nim, name) => {
        try {
            const [student, created] = await Student.findOrCreate({
                where: {
                    username: nim,
                },
                defaults: {
                    nim: nim,
                    password: hashPassword(nim),
                    name: name,
                },
            });
            if (created)
                return createResponseObject(200, "success", "Data mahasiswa baru berhasil ditambahkan", student);
            else throw createHttpError(409, "data student already exist");
        } catch (error) {
            return errorHandling(error);
        }
    },
    update: async (id, name) => {
        try {
            const student = await Student.findByPk(id, {
                attributes: {
                    exclude: ["password"],
                },
            });
            if (!student) throw createHttpError(404, "student not found");

            student.name = name;
            await student.save();

            return createResponseObject(200, "success", "Data kelas berhasil diperbarui", student);
        } catch (error) {
            return errorHandling(error);
        }
    },
    updatePassword: async (id, passwordOld, passwordNew) => {
        try {
            const student = await Student.findByPk(id);
            if (!student) throw createHttpError(404, "student not found");

            const passwordOldMatch = comparePassword(passwordOld, student.password);
            if (!passwordOldMatch) throw createHttpError(400, "old password not match with password at database");

            student.password = hashPassword(passwordNew);
            await student.save();

            return createResponseObject(200, "success", "Password changed");
        } catch (error) {
            return errorHandling(error);
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
            return errorHandling(error);
        }
    },
    resetPassword: async (id) => {
        try {
            const student = await Student.findByPk(id);
            if (!student) throw createHttpError(404, "student not found");

            student.password = hashPassword(student.username);
            await student.save();
            return createResponseObject(200, "success", "password reset");
        } catch (error) {
            return errorHandling(error);
        }
    },
};
