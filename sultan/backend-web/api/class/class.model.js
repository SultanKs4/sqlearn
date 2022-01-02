const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/database");
const User = require('../user/user.model');

class Class extends Model { }

Class.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: 'name'
    },
    semester: {
        type: DataTypes.INTEGER,
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
    modelName: 'Class',
    tableName: 'classes'
});

// Class.belongsTo(User)
// Class.belongsToMany(Student, { through: StudentClass })

module.exports = Class