const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/database");
const Question = require('../question/question.model');
const Session = require('../session/session.model');

class SessionStudentAnswer extends Model { }

SessionStudentAnswer.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    session_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Session,
            key: "id",
        }
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
    modelName: 'SessionStudentAnswer',
    tableName: 'session_student_answers'
});

module.exports = SessionStudentAnswer