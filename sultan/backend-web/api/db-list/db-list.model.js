const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");
const Question = require("../question/question.model");
const Session = require("../session/session.model");

class DbList extends Model {}

DbList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        db_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        db_filename: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "DbList",
        tableName: "db_list",
    }
);

module.exports = DbList;
