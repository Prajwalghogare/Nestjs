const mysql = require('mysql2')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Prajwal@23',
    database: 'emtec',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

module.exports = pool