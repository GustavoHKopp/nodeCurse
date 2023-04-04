const sequelize = require('sequelize')
const connection = require('./database')

const Resposta = connection.define('respostas', {
    corpo:{
        type: sequelize.TEXT,
        allowNull: false
    },
    perguntaID:{
        type: sequelize.INTEGER,
        allownull: false
        
    } 
})

Resposta.sync({force: false}).then(() => {})

module.exports = Resposta