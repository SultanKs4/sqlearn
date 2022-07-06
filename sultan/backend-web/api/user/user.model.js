const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        level: {
            type: DataTypes.ENUM(["dosen", "admin"]),
            defaultValue: "dosen",
        },
        no_induk: DataTypes.STRING(30),
        name: DataTypes.STRING(100),
    },
    {
        sequelize,
        paranoid: true,
        modelName: "User",
        tableName: "users",
    }
);

// User.hasMany(Class)

module.exports = User;
