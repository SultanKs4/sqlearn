const convertExcel = require("../../lib/convertExcel");
const Student = require("../student/student.model");
const classModel = require("./class.model");
const { Op } = require("sequelize");
const { hashPassword } = require("../../lib/hashPassword");
const deleteFile = require("../../lib/deleteFile");
const createResponseObject = require("../../lib/createResponseObject");
const StudentClass = require("../student-class/student-class.model");
const Class = require("./class.model");


module.exports = {
    getAll: async (user) => {
        try {
            const classes = await classModel.findAll({
                where: {
                    user_id: user.id
                }
            })
            return createResponseObject(true, "Data kelas berhasil didapatkan", classes);
        } catch (error) {
            return createResponseObject(false, "Data kelas gagal didapatkan");
        }
    },

    getAllByStudents: async (user) => {
        try {
            const classes = await Student.findByPk(user.id, {
                include: {
                    model: Class,
                    as: "classes",
                    through: { attributes: [] }
                }
            })
            return createResponseObject(true, "Data kelas berhasil didapatkan", classes.classes);
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data kelas gagal didapatkan");
        }
    },

    getOne: async (id) => {
        try {
            const classById = await classModel.findByPk(id, {
                include: [{
                    model: Student,
                    as: "students",
                    attributes: ['id', 'name', 'nim'],
                    through: { attributes: [] }
                }]
            })
            return createResponseObject(true, "Data studi kasus berhasil didapatkan", classById)
        } catch (error) {
            console.error(error)
            return createResponseObject(false, "Data studi kasus gagal didapatkan");
        }
    },

    insert: async (data, user) => {
        try {
            let newClass = await classModel.create({
                name: data.name,
                semester: data.semester,
                user_id: user.id
            })
            return createResponseObject(true, "Data kelas baru berhasil ditambahkan", newClass)
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data kelas baru gagal ditambahkan", newClass)
        }
    },

    convertExcel: async (data, user, file) => {
        try {

            const excelsData = convertExcel(file)
            const studentsExcel = excelToStudents(excelsData)

            if (!studentsExcel) {
                await deleteFile(file)
                return createResponseObject(false, "Tidak berhasil parsing data dari excel")
            }

            const classDb = await classModel.findOne({
                where: {
                    name: data.name
                }
            })

            if (classDb) {
                await deleteFile(file)
                return createResponseObject(false, "Kelas dengan nama tersebut sudah ada")
            }


            let newClass = await classModel.create({
                name: data.name,
                semester: data.semester,
                user_id: user.id
            })

            const { arrStudents: arrStudentsNim } = destructurStudentsByField(studentsExcel, 'nim')
            const existedStudents = await findStudentsByNim(arrStudentsNim)
            const { objStudents: nimExistedStudents } = destructurStudentsByField(existedStudents, 'nim')
            const newStudents = filterExistedStudents(studentsExcel, nimExistedStudents)

            if (newStudents.length != 0) {
                let isSuccess = await studentBulkInsert(newStudents)

                if (!isSuccess) {
                    return createResponseObject(false, "Gagal menambah data mahasiswa baru")
                }
            }

            await deleteFile(file)

            const existedStudentsNew = await findStudentsByNim(arrStudentsNim)
            const studentClasses = studentToStudentClasses(newClass.id, existedStudentsNew)
            const { arrStudents: arrStudentsId } = destructurStudentsByField(existedStudentsNew, 'id')
            const existedStudentClasses = await findExistedStudentClasses(newClass.id, arrStudentsId)
            const { objStudentClasses: objStudentClassesStudentId } = destructurStudentClassesByField(existedStudentClasses, 'student_id')
            const newStudentClasses = filterExistedStudentClasses(studentClasses, objStudentClassesStudentId)
            if (newStudentClasses.length != 0) {
                let isSuccess = await studentClassesBulkInsert(newStudentClasses)

                if (!isSuccess) {
                    return createResponseObject(false, "Gagal menambahkan mahasiswa ke kelas")
                }
            }

            return createResponseObject(true, "Data mahasiswa baru berhasil ditambahkan ke kelas")
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data kelas baru gagal ditambahkan")
        }
    },

    update: async (id, data) => {
        try {
            const classOne = await classModel.findByPk(id)
            if (!classOne) return createResponseObject(false, "Tidak ada data class didapatkan");

            Object.keys(data).forEach(val => {
                classOne[val] = data[val]
            })

            await classOne.save()

            return createResponseObject(true, "Data kelas berhasil diperbarui", classOne);
        } catch (error) {
            return createResponseObject(false, "Data kelas gagal diperbarui");
        }
    },

    addStudent: async (classId, studentIds) => {
        console.log(studentIds)
        try {
            const students = studentIds.map(id => {
                return {
                    class_id: classId,
                    student_id: id
                }
            })
            const newStudentClass = StudentClass.bulkCreate(students)

            return createResponseObject(true, "Berhasil memasukkan mahasiswa ke kelas", newStudentClass);
        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Gagal memasukkan mahasiswa ke kelas");
        }
    },

    removeStudent: async (classId, studentId) => {
        try {
            const studentClass = await StudentClass.findOne({
                where: {
                    class_id: classId,
                    student_id: studentId
                }
            })
            if (!studentClass) return createResponseObject(false, "Mahasiswa tidak terdapat di dalam kelas tersebut");

            await StudentClass.destroy({
                where: {
                    class_id: classId,
                    student_id: studentId
                }
            })

            return createResponseObject(true, "Berhasil mengeluarkan mahasiswa dari kelas");
        } catch (error) {
            return createResponseObject(false, "Gagal mengeluarkan mahasiswa dari kelas");
        }
    },

    destroy: async (id) => {
        try {
            const classOne = await classModel.findByPk(id)
            if (!classOne) return createResponseObject(false, "Tidak ada kelas yang dihapus")

            await classModel.destroy({
                where: {
                    id
                }
            })

            return createResponseObject(true, "Data kelas berhasil dihapus")


        } catch (error) {
            console.log(error)
            return createResponseObject(false, "Data kelas gagal dihapus");
        }
    }

}

function excelToStudents(data) {
    if (!data["Daftar Mahasiswa"]) return null

    const students = data["Daftar Mahasiswa"].map(student => {
        nimAsString = student['nim'].toString()
        return {
            username: nimAsString,
            password: hashPassword(nimAsString),
            nim: nimAsString,
            name: student['name']
        }
    })

    return students
}

function studentToStudentClasses(classId, data) {
    if (!data) return null

    const studentClasses = data.map(studentClass => {
        return {
            student_id: studentClass['id'],
            class_id: classId
        }
    })

    return studentClasses
}

function destructurStudentsByField(students, field) {
    if (!students || students.length == 0) {
        return { objStudents: {}, arrStudents: [] }
    }

    const objStudents = {}
    students.forEach(student => objStudents[student[field]] = true)

    const arrStudents = students.map(student => student[field])

    return { objStudents, arrStudents }
}

function destructurStudentClassesByField(studentClasses, field) {
    if (!studentClasses || studentClasses.length == 0) {
        return { objStudentClasses: {}, arrStudentClasses: [] }
    }

    const objStudentClasses = {}
    studentClasses.forEach(studentClass => objStudentClasses[studentClass[field]] = true)

    const arrStudentClasses = studentClasses.map(studentClass => studentClass[field])

    return { objStudentClasses, arrStudentClasses }
}

async function findStudentsByNim(nims) {
    if (!nims || nims.length == 0) {
        return null
    }
    try {
        const students = await Student.findAll({
            where: {
                nim: {
                    [Op.in]: nims
                }
            },
            raw: true
        })
        if (students.length != 0) {
            return students
        } else {
            return null
        }
    } catch (error) {
        console.log(error)
    }
}

function filterExistedStudents(students, objStudents) {
    if (!students || students.length == 0) return null
    if (!objStudents) return students

    const filteredStudents = students.filter(student => !objStudents[student['nim']])

    return filteredStudents
}

function filterExistedStudentClasses(studentClasses, objStudentClasses) {
    if (!studentClasses || studentClasses.length == 0) return null
    if (!objStudentClasses) return studentClasses

    const filteredStudentClasses = studentClasses.filter(studentClass => !objStudentClasses[studentClass['student_id']])

    return filteredStudentClasses
}

async function studentBulkInsert(students) {
    try {
        await Student.bulkCreate(students)
        return true
    } catch (error) {
        return false
    }

}

async function findExistedStudentClasses(classId, studentIds) {
    if (!studentIds || studentIds.length == 0) {
        return null
    }
    try {
        const studentClasses = await StudentClass.findAll({
            where: {
                student_id: {
                    [Op.in]: studentIds
                },
                class_id: classId
            },
            raw: true
        })
        if (studentClasses.length != 0) {
            return studentClasses
        } else {
            return null
        }
    } catch (error) {
        console.log(error)
    }
}

async function studentClassesBulkInsert(studentClasses) {
    try {
        await StudentClass.bulkCreate(studentClasses)
        return true
    } catch (error) {
        return false
    }
}