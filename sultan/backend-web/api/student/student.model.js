const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/database");

class Student extends Model { }

Student.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    nim: {
        type: DataTypes.STRING(30),
        unique: 'nim'
    },
    name: DataTypes.STRING(100)
}, {
    sequelize,
    modelName: 'Student',
    tableName: "students"
});

// Student.belongsToMany(Class, { through: StudentClass })

module.exports = Student