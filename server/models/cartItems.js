const  { DataTypes }  = require('sequelize')
const sequelize = require('../utils/db')

const CartItems = sequelize.define("cartItems",{
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

module.exports = CartItems;