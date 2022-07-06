const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");
const Container = require("../container/container.model");
const Question = require("../question/question.model");

class QuestionContainer extends Model {}

QuestionContainer.init(
    {
        question_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Question,
                key: "id",
            },
        },
        container_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Container,
                key: "id",
            },
        },
    },
    {
        sequelize,
        paranoid: true,
        modelName: "QuestionContainer",
        tableName: "question_containers",
    }
);

module.exports = QuestionContainer;
