const pool = require("../config/database");

const postChat = async(req, res) => {
    try {
       const { username, message, date} = req.body;  
       const newChat = await pool.query("INSERT INTO chat (username, message, date) VALUES($1, $2, $3) RETURNING *", [username, message, date]);
       return res.json(newChat.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
}

const getAllChat = async(req, res) => {
    try {
        const allChats = await pool.query("SELECT * FROM chat");
        return res.json(allChats.rows); 
    } catch (error) {
        console.error(error);
        return res.status(500).json(error); 
    }
}


module.exports = { postChat, getAllChat }