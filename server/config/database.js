const dotenv = require("dotenv").config();

const Pool = require("pg").Pool


const pool = new Pool({
    user : process.env.NODE_ENV == "DEV" ? process.env.DB_USER : process.env.DEPLOYED_DB_USER,
    password : process.env.NODE_ENV == "DEV" ? process.env.DB_PASSWORD : process.env.DEPLOYED_DB_PASS,
    host : process.env.NODE_ENV == "DEV" ? process.env.DB_HOST : process.env.DEPLOYED_DB_HOST,
    port : process.env.NODE_ENV == "DEV" ? process.env.DB_PORT: process.env.DEPLOYED_DB_PORT,
    database : process.env.NODE_ENV == "DEV" ?  process.env.DB_NAME : process.env.DEPLOYED_DB_NAME
})

const initializeDB = async() => {
    let createUsersQuery = `
            CREATE TABLE IF NOT EXISTS chat(
                id SERIAL PRIMARY KEY,
                username TEXT,
                message TEXT,
                date TEXT           
            )
        `
    await pool.query(createUsersQuery)

    console.log("Connected to database")
}

initializeDB()
module.exports = pool