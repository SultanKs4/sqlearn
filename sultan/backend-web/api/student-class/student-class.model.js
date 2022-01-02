const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/database");
const Class = require('../class/class.model');
const Student = require('../student/student.model');

class StudentClass extends Model { }

StudentClass.init({
    student_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Student,
            key: "id"
        }
    },
    class_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Class,
            key: "id"
        }
    },
}, {
    sequelize,
    modelName: 'StudentClass',
    tableName: 'student_classes'
});

module.exports = StudentClass