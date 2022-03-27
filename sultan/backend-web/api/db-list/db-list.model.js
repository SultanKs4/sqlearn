const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

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
