const sequelize = require('sequelize')
const connection = require('./database')

const Pergunta = connection.define('perguntas', {
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: sequelize.TEXT,
        allownull: false
    } 
})

Pergunta.sync({force: false}).then(() => {})

module.exports = Pergunta