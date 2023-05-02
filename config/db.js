const mongoose = require('mongoose');
require('dotenv').config()

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

async function startDB() {
    try {
        mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@joffre.ckgez7n.mongodb.net/test`)
        console.log('Banco conectado!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = startDB;