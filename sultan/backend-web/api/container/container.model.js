const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");
const User = require("../user/user.model");

class Container extends Model {}

Container.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.TEXT,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: "id",
            },
        },
        label_id: {
            type: DataTypes.INTEGER,
            references: {
                model: QuestionLabel,
                key: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "Container",
        tableName: "containers",
    }
);

// Class.belongsTo(User)
// Class.belongsToMany(Student, { through: StudentClass })

module.exports = Container;
