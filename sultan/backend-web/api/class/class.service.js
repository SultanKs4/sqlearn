const convertExcel = require("../../lib/convertExcel");
const Student = require("../student/student.model");
const Class = require("./class.model");
const { Op } = require("sequelize");
const { hashPassword } = require("../../lib/hashPassword");
const deleteFile = require("../../lib/deleteFile");
const createResponseObject = require("../../lib/createResponseObject");
const createHttpError = require("http-errors");
const errorHandling = require("../../lib/errorHandling");

module.exports = {
    getAll: async (user) => {
        try {
            let classes = [];
            if (user.role == "dosen") {
                classes = await Class.findAll({
                    where: {
                        user_id: user.id,
                    },
                });
            } else if (user.role == "mahasiswa") {
                classes = await Student.findByPk(user.id, {
                    include: {
                        model: Class,
                        as: "classes",
                        through: { attributes: [] },
                    },
                }).then((data) => {
                    return data.classes;
                });
            }
            if (!classes || classes.length == 0) throw createHttpError(404, "data kelas tidak ada");
            return createResponseObject(200, "success", "Data kelas berhasil didapatkan", classes);
        } catch (error) {
            return errorHandling(error);
        }
    },

    getOne: async (id) => {
        try {
            const classById = await Class.findByPk(id, {
                include: [
                    {
                        model: Student,
                        as: "students",
                        attributes: ["id", "name", "nim"],
                        through: { attributes: [] },
                    },
                ],
            });
            if (!classById) throw createHttpError(404, "data class not found");
            return createResponseObject(200, "success", "Data studi kasus berhasil didapatkan", classById);
        } catch (error) {
            return errorHandling(error);
        }
    },

    insert: async (data, user) => {
        try {
            const [dataClass, created] = await Class.findOrCreate({
                where: { name: data.name },
                defaults: { semester: data.semester, user_id: user.id },
            });

            if (created) return createResponseObject(201, "success", "Data kelas baru berhasil ditambahkan", dataClass);
            else throw createHttpError(409, "data already exist");
        } catch (error) {
            return errorHandling(error);
        }
    },

    convertExcel: async (data, user, file) => {
        try {
            // Class
            const [classDb] = await Class.findOrCreate({
                where: {
                    name: data.name,
                },
                defaults: {
                    semester: data.semester,
                    user_id: user.id,
                },
            });

            // Student
            const excelsData = convertExcel(file);
            const studentsExcel = excelToStudents(excelsData);

            const arrStudentsNim = studentsExcel.map((student) => student.nim);
            let existedStudents = await findStudentsByNim(arrStudentsNim);
            let newStudents = [];
            if (existedStudents.length > 0) {
                newStudents = studentsExcel.filter(
                    (student) => !existedStudents.some((existData) => existData.nim == student.nim)
                );
            } else newStudents = studentsExcel;

            if (newStudents.length > 0) existedStudents = await Student.bulkCreate(newStudents, { returning: true });

            await classDb.addStudents(existedStudents);
            let response = classDb.toJSON();
            response.student = await classDb.getStudents({
                attributes: ["id", "nim", "name"],
                joinTableAttributes: [],
            });

            await deleteFile(file);

            return createResponseObject(201, "success", "Data mahasiswa baru berhasil ditambahkan ke kelas", response);
        } catch (error) {
            await deleteFile(file);
            return errorHandling(error);
        }
    },

    update: async (id, data, user) => {
        try {
            const classDb = await Class.findByPk(id);
            if (!classDb) throw createHttpError(404, "data class by id not found");

            const checkData = await Class.findOne({
                where: {
                    name: data.name,
                },
            });
            if (checkData && classDb.id != checkData.id)
                throw createHttpError(409, "same data found, cannot update to same data");

            let dataUpdate = {
                name: data.name,
                semester: data.semester,
                user_id: user.id,
            };
            Object.keys(dataUpdate).forEach((val) => {
                classDb[val] = dataUpdate[val];
            });
            await classDb.save();

            return createResponseObject(200, "success", "Data kelas berhasil diperbarui", classDb);
        } catch (error) {
            return errorHandling(error);
        }
    },

    addStudent: async (classId, studentIds) => {
        try {
            const classOne = await Class.findByPk(classId);
            if (!classOne) throw createHttpError(404, "class not found");
            const students = await getStudentsFromIds(studentIds);
            await classOne.addStudents(students);
            let data = classOne.toJSON();
            data.student = await classOne.getStudents({
                attributes: ["id", "nim", "name"],
                joinTableAttributes: [],
            });

            return createResponseObject(201, "success", "Berhasil memasukkan mahasiswa ke kelas", data);
        } catch (error) {
            return errorHandling(error);
        }
    },

    removeStudent: async (classId, studentIds) => {
        try {
            const classOne = await Class.findByPk(classId);
            if (!classOne) throw createHttpError(404, "class not found");
            const students = await getStudentsFromIds(studentIds);
            await classOne.removeStudents(students);

            return createResponseObject(200, "success", "Berhasil mengeluarkan mahasiswa dari kelas");
        } catch (error) {
            return errorHandling(error);
        }
    },

    destroy: async (id) => {
        try {
            const classOne = await Class.findByPk(id);
            if (!classOne) throw createHttpError(404, "Tidak ada kelas yang dihapus");

            await Class.destroy({
                where: {
                    id,
                },
            });

            return createResponseObject(200, "success", "Data kelas berhasil dihapus");
        } catch (error) {
            return errorHandling(error);
        }
    },
};

function excelToStudents(data) {
    try {
        if (!data["Daftar Mahasiswa"]) throw createHttpError(400, "sheet excel different name");
        const students = data["Daftar Mahasiswa"].map((student) => {
            nimAsString = student["nim"].toString();
            return {
                username: nimAsString,
                password: hashPassword(nimAsString),
                nim: nimAsString,
                name: student["name"],
            };
        });
        if (!students || students.length == 0) throw createHttpError(404, "data mahasiswa at excel file not found");
        return students;
    } catch (error) {
        throw error;
    }
}

async function findStudentsByNim(nims) {
    return await Student.findAll({
        where: {
            nim: {
                [Op.in]: nims,
            },
        },
    });
}

async function getStudentsFromIds(studentIds) {
    try {
        return await Promise.all(
            studentIds.map(async (id) => {
                let student = await Student.findByPk(id);
                if (!student) throw createHttpError(404, `student id ${id} not found`);
                return student;
            })
        );
    } catch (error) {
        throw error;
    }
}
