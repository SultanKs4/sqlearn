const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");
const DbList = require("../db-list/db-list.model");
const Question = require("../question/question.model");
const Session = require("../session/session.model");

class SessionDb extends Model {}

SessionDb.init(
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
        db_list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: DbList,
                key: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "SessionDb",
        tableName: "session_db",
    }
);

module.exports = SessionDb;
