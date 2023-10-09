const  { DataTypes }  = require('sequelize')
const sequelize = require('../utils/db')

const Prod_Services = sequelize.define("products_services",{
    id: {
        type: DataTypes.BIGINT.UNSIGNED ,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    type: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    imageUrl :{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

module.exports = Prod_Services;