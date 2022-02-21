const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class QuestionLabel extends Model {}

QuestionLabel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "QuestionLabel",
        tableName: "questions_label",
    }
);

module.exports = QuestionLabel;
