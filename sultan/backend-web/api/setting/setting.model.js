const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/database");

class Setting extends Model { }

Setting.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    key_tag: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    tag_1: DataTypes.TEXT,
    tag_2: DataTypes.TEXT,
    tag_3: DataTypes.TEXT,
    tag_4: DataTypes.TEXT,
    tag_5: DataTypes.TEXT,
    tag_6: DataTypes.TEXT,
}, {
    sequelize,
    modelName: 'Setting',
    tableName: "settings"
});

// User.hasMany(Class)

module.exports = Setting