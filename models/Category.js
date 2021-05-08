const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init({
    // define columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    shirts: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shorts: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    music: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hats: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shoes: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
});

module.exports = Category;