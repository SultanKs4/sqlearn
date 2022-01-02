const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/database");
const Container = require('../container/container.model');
const User = require('../user/user.model');

class Schedule extends Model { }

Schedule.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    finish_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    finish_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    container_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Container,
            key: "id",
        }
    },
    total_questions: {
        type: DataTypes.INTEGER,
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
        }
    },
}, {
    sequelize,
    modelName: 'Schedule',
    tableName: 'schedules'
});

// Class.belongsTo(User)
// Class.belongsToMany(Student, { through: StudentClass })

module.exports = Schedule