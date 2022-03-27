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
            allowNull: false,
        },
        value: DataTypes.TEXT,
        type: DataTypes.ENUM("threshold", "latihan", "ujian"),
    },
    {
        sequelize,
        modelName: "Setting",
        tableName: "settings",
    }
);

// User.hasMany(Class)

module.exports = Setting;
