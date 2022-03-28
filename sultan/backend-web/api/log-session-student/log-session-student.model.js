const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");
const Question = require("../question/question.model");
const Session = require("../session/session.model");

class LogSessionStudent extends Model {}

LogSessionStudent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        session_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Session,
                key: "id",
            },
        },
        question_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Question,
                key: "id",
            },
        },
        answer: {
            type: DataTypes.TEXT,
        },
        answer_json: {
            type: DataTypes.JSON,
            defaultValue: null,
        },
        type: {
            type: DataTypes.ENUM(["start", "test", "submit", "move"]),
        },
        similarity: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: -1.0,
        },
        is_equal: {
            type: DataTypes.BOOLEAN,
        },
        timer: {
            type: DataTypes.TIME,
        },
    },
    {
        sequelize,
        modelName: "LogSessionStudent",
        tableName: "log_session_student",
    }
);

module.exports = LogSessionStudent;
