const Pool = require("pg").Pool

const pool = new Pool({
    user : "Fynn",
    password : "sarinas@borja1982",
    host : "localhost",
    port : 5432,
    database : "chatboarddb"
})

module.exports = pool