const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/database");
const Class = require('../class/class.model');
const Schedule = require('../schedule/schedule.model');

class ClassSchedule extends Model { }

ClassSchedule.init({
    class_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Class,
            key: "id"
        }
    },
    schedule_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Schedule,
            key: "id"
        }
    },
}, {
    sequelize,
    modelName: 'ClassSchedule',
    tableName: 'class_schedules'
});

module.exports = ClassSchedule