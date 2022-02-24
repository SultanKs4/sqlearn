const convertExcel = require("../../lib/convertExcel");
const Student = require("../student/student.model");
const Class = require("./class.model");
const { Op } = require("sequelize");
const { hashPassword } = require("../../lib/hashPassword");
const deleteFile = require("../../lib/deleteFile");
const createResponseObject = require("../../lib/createResponseObject");
const StudentClass = require("../student-class/student-class.model");

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
                }).then((result) => {
                    return result.classes ? result.classes : null;
                });
            }
            return createResponseObject("success", "Data kelas berhasil didapatkan", classes);
        } catch (error) {
            return createResponseObject(
                "error",
                "Data kelas gagal didapatkan",
                error == null ? null : error.message ? error.message : error
            );
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
            return createResponseObject("success", "Data studi kasus berhasil didapatkan", classById);
        } catch (error) {
            console.error(error);
            return createResponseObject(
                "error",
                "Data studi kasus gagal didapatkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    insert: async (data, user) => {
        try {
            let classDb = await Class.create({
                name: data.name,
                semester: data.semester,
                user_id: user.id,
            });
            return createResponseObject("success", "Data kelas baru berhasil ditambahkan", newClass);
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data kelas baru gagal ditambahkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    convertExcel: async (data, user, file) => {
        try {
            // Class
            const classDb = await Class.findOrCreate({
                where: {
                    name: data.name,
                    semester: data.semester,
                },
                defaults: {
                    name: data.name,
                    semester: data.semester,
                    user_id: user.id,
                },
            });

            if (classDb == null) {
                await deleteFile(file);
                throw new Error("Kelas tidak ada atau gagal dibuat");
            }

            // Student
            const excelsData = convertExcel(file);
            const studentsExcel = excelToStudents(excelsData);

            if (studentsExcel == null) {
                await deleteFile(file);
                throw new Error("Tidak berhasil parsing data dari excel");
            }

            const { arrStudents: arrStudentsNim } = destructurStudentsByField(studentsExcel, "nim");
            const existedStudents = await findStudentsByNim(arrStudentsNim);
            const { objStudents: nimExistedStudents } = destructurStudentsByField(existedStudents, "nim");
            const newStudents = filterExistedStudents(studentsExcel, nimExistedStudents);

            if (newStudents.length == 0) throw new Error("data mahasiswa kosong");

            let isSuccess = await studentBulkInsert(newStudents);
            if (isSuccess) throw new Error("gagal menambah data mahasiswa baru");

            const existedStudentsNew = await findStudentsByNim(arrStudentsNim);
            const studentClasses = studentToStudentClasses(classDb.id, existedStudentsNew);
            const { arrStudents: arrStudentsId } = destructurStudentsByField(existedStudentsNew, "id");
            const existedStudentClasses = await findExistedStudentClasses(classDb.id, arrStudentsId);
            const { objStudentClasses: objStudentClassesStudentId } = destructurStudentClassesByField(
                existedStudentClasses,
                "student_id"
            );
            const newStudentClasses = filterExistedStudentClasses(studentClasses, objStudentClassesStudentId);
            if (newStudentClasses.length == 0) throw new Error("data mahasiswa kelas kosong");

            isSuccess = await studentClassesBulkInsert(newStudentClasses);
            if (isSuccess) throw new Error("gagal menambahkan mahasiswa ke kelas");

            await deleteFile(file);

            return createResponseObject("success", "Data mahasiswa baru berhasil ditambahkan ke kelas");
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data kelas dan mahasiswa baru gagal ditambahkan",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    update: async (id, data, user) => {
        try {
            const classUpdated = await Class.update(
                {
                    name: data.name,
                    semester: data.semester,
                    user_id: user.id,
                },
                { where: { id: id } }
            ).then(async () => {
                return await Class.findByPk(id, { raw: true });
            });
            if (classUpdated == null) throw new Error("class not found");

            return createResponseObject("success", "Data kelas berhasil diperbarui", classOne);
        } catch (error) {
            return createResponseObject(
                "error",
                "Data kelas gagal diperbarui",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    addStudent: async (classId, studentIds) => {
        console.log(studentIds);
        try {
            const classOne = await Class.findOne(classId);
            if (classOne == null) throw new Error("class not found");
            const students = await Promise.all(
                studentIds.map(async (id) => {
                    let student = await Student.findByPk(id);
                    if (student == null) throw new Error(`student id ${id} not found`);
                    return {
                        class_id: classOne.id,
                        student_id: student.id,
                    };
                })
            );
            const newStudentClass = await StudentClass.bulkCreate(students);

            return createResponseObject("success", "Berhasil memasukkan mahasiswa ke kelas", newStudentClass);
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Gagal memasukkan mahasiswa ke kelas",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    removeStudent: async (classId, studentId) => {
        try {
            const studentClass = await StudentClass.findOne({
                where: {
                    class_id: classId,
                    student_id: studentId,
                },
            });
            if (studentClass == null) throw new Error("mahasiswa tidak terdapat di dalam kelas tersebut");

            await StudentClass.destroy({
                where: {
                    class_id: classId,
                    student_id: studentId,
                },
            });

            return createResponseObject("success", "Berhasil mengeluarkan mahasiswa dari kelas");
        } catch (error) {
            return createResponseObject(
                "error",
                "Gagal mengeluarkan mahasiswa dari kelas",
                error == null ? null : error.message ? error.message : error
            );
        }
    },

    destroy: async (id) => {
        try {
            const classOne = await Class.findByPk(id);
            if (classOne == null) throw new Error("Tidak ada kelas yang dihapus");

            await Class.destroy({
                where: {
                    id,
                },
            });

            return createResponseObject("success", "Data kelas berhasil dihapus");
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data kelas gagal dihapus",
                error == null ? null : error.message ? error.message : error
            );
        }
    },
};

function excelToStudents(data) {
    if (!data["Daftar Mahasiswa"]) return null;

    const students = data["Daftar Mahasiswa"].map((student) => {
        nimAsString = student["nim"].toString();
        return {
            username: nimAsString,
            password: hashPassword(nimAsString),
            nim: nimAsString,
            name: student["name"],
        };
    });

    return students;
}

function studentToStudentClasses(classId, data) {
    if (!data) return null;

    const studentClasses = data.map((studentClass) => {
        return {
            student_id: studentClass["id"],
            class_id: classId,
        };
    });

    return studentClasses;
}

function destructurStudentsByField(students, field) {
    if (!students || students.length == 0) {
        return { objStudents: {}, arrStudents: [] };
    }

    const objStudents = {};
    students.forEach((student) => (objStudents[student[field]] = true));

    const arrStudents = students.map((student) => student[field]);

    return { objStudents, arrStudents };
}

function destructurStudentClassesByField(studentClasses, field) {
    if (!studentClasses || studentClasses.length == 0) {
        return { objStudentClasses: {}, arrStudentClasses: [] };
    }

    const objStudentClasses = {};
    studentClasses.forEach((studentClass) => (objStudentClasses[studentClass[field]] = true));

    const arrStudentClasses = studentClasses.map((studentClass) => studentClass[field]);

    return { objStudentClasses, arrStudentClasses };
}

async function findStudentsByNim(nims) {
    if (!nims || nims.length == 0) {
        return null;
    }
    try {
        const students = await Student.findAll({
            where: {
                nim: {
                    [Op.in]: nims,
                },
            },
            raw: true,
        });
        if (students.length != 0) {
            return students;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

function filterExistedStudents(students, objStudents) {
    if (!students || students.length == 0) return null;
    if (!objStudents) return students;

    const filteredStudents = students.filter((student) => !objStudents[student["nim"]]);

    return filteredStudents;
}

function filterExistedStudentClasses(studentClasses, objStudentClasses) {
    if (!studentClasses || studentClasses.length == 0) return null;
    if (!objStudentClasses) return studentClasses;

    const filteredStudentClasses = studentClasses.filter(
        (studentClass) => !objStudentClasses[studentClass["student_id"]]
    );

    return filteredStudentClasses;
}

async function studentBulkInsert(students) {
    try {
        await Student.bulkCreate(students);
        return true;
    } catch (error) {
        return false;
    }
}

async function findExistedStudentClasses(classId, studentIds) {
    if (!studentIds || studentIds.length == 0) {
        return null;
    }
    try {
        const studentClasses = await StudentClass.findAll({
            where: {
                student_id: {
                    [Op.in]: studentIds,
                },
                class_id: classId,
            },
            raw: true,
        });
        if (studentClasses.length != 0) {
            return studentClasses;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

async function studentClassesBulkInsert(studentClasses) {
    try {
        await StudentClass.bulkCreate(studentClasses);
        return true;
    } catch (error) {
        return false;
    }
}
