'use strict'

const connStr = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, 
    port : parseInt(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    options: {
        "encrypt": true,
        "enableArithAbort": true
    }
}

module.exports = connStr;