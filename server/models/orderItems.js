const  { DataTypes }  = require('sequelize')
const sequelize = require('../utils/db')

const OrderItems = sequelize.define("orderItems",{
    id: {
        type: DataTypes.BIGINT.UNSIGNED	,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
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

module.exports = OrderItems;