const mysql = require("mysql2");
const sqldb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mihirvetal@203",
    database: "users"
})

module.exports = sqldb;