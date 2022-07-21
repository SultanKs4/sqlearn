const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/database");
const Question = require('../question/question.model');

class TestUserAnswer extends Model { }

TestUserAnswer.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(100),
    },
    question_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Question,
            key: "id",
        }
    },
    answer: {
        type: DataTypes.TEXT,
    },
    type: {
        type: DataTypes.ENUM(['test', 'submit']),
    },
    similarity: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: -1.00
    },
    is_equal: {
        type: DataTypes.BOOLEAN,
    }
}, {
    sequelize,
    modelName: 'TestUserAnswer',
    tableName: 'test_user_answers'
});

module.exports = TestUserAnswer