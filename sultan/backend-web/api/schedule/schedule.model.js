const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");
const Container = require("../container/container.model");
const User = require("../user/user.model");

class Schedule extends Model {}

Schedule.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        start: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        finish: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        container_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Container,
                key: "id",
            },
        },
        type: {
            type: DataTypes.ENUM(["latihan", "ujian"]),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(360),
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: "id",
            },
        },
    },
    {
        sequelize,
        paranoid: true,
        modelName: "Schedule",
        tableName: "schedules",
    }
);

// Class.belongsTo(User)
// Class.belongsToMany(Student, { through: StudentClass })

module.exports = Schedule;
