const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class Setting extends Model {}

Setting.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        attemps: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: null,
        },
        value: DataTypes.TEXT,
        type: DataTypes.ENUM("threshold", "latihan", "ujian"),
    },
    {
        sequelize,
        paranoid: true,
        modelName: "Setting",
        tableName: "settings",
    }
);

// User.hasMany(Class)

module.exports = Setting;
