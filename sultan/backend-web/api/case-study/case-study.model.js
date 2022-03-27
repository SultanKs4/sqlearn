const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");
const DbList = require("../db-list/db-list.model");
const User = require("../user/user.model");

class CaseStudy extends Model {}

CaseStudy.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
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
        modelName: "CaseStudy",
        tableName: "case_studies",
    }
);

module.exports = CaseStudy;
