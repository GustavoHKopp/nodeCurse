const sequelize = require('sequelize')
const connection = new sequelize('Questions_answer','root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection