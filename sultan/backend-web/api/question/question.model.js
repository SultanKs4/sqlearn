const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/database");
const CaseStudy = require('../case-study/case-study.model');
const User = require('../user/user.model');

class Question extends Model { }

Question.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    answer_pic: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tables: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    case_study_id: {
        type: DataTypes.INTEGER,
        references: {
            model: CaseStudy,
            key: "id"
        }
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
    modelName: 'Question',
    tableName: "questions"
});

module.exports = Question