const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/database");
const Schedule = require('../schedule/schedule.model');
const Student = require('../student/student.model');

class Score extends Model { }

Score.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    student_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Student,
            key: "id",
        }
    },
    schedule_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Schedule,
            key: "id",
        }
    },
    score: {
        type: DataTypes.INTEGER,
    },
}, {
    sequelize,
    modelName: 'Score',
    tableName: 'scores'
});

module.exports = Score