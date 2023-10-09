const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('plotline','root','MYGurjeet@20',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize