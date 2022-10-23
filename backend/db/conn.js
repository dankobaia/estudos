
const { Sequelize } = require('sequelize')
const dotenv = require('dotenv').config()

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT


const sequelize = new Sequelize (dbName, dbUser, dbPassword, {
    dialect: 'mysql',
    host: dbHost,
    port: dbPort,
})

/*
const sequelize = new Sequelize('tasks', 'root', '1234trocar', {
    host: 'tcp-mo2.mogenius.io',
    port:'10720',
    dialect: 'mysql'
})
*/
try {

    sequelize.authenticate()
    console.log('Conectado ao Mysql')

} catch (error) {
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize
