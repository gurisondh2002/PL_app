const  { DataTypes }  = require('sequelize')
const sequelize = require('../utils/db')

const Cart = sequelize.define("cart",{
    id: {
        type: DataTypes.BIGINT.UNSIGNED	,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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

module.exports = Cart;