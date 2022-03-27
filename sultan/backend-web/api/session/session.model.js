const { DataTypes, Model } = require("sequelize");
const { Sequelize } = require("sequelize");
const sequelize = require("../../config/database");
const Student = require("../student/student.model");
const Schedule = require("../schedule/schedule.model");

class Session extends Model {}

Session.init(
    {
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
            },
        },
        session_started: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        schedule_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Schedule,
                key: "id",
            },
        },
        is_finished: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: "Session",
        tableName: "sessions",
    }
);

module.exports = Session;
