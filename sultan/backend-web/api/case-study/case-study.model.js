const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/database");
const User = require('../user/user.model');

class CaseStudy extends Model { }

CaseStudy.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    db_name: {
        type: DataTypes.STRING(50),
        allowNull: false
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
    modelName: 'CaseStudy',
    tableName: "case_studies"
});

module.exports = CaseStudy