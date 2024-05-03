const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config()
const app = express();
const server = require('http').createServer(app);
const PORT = 3200;


app.use(cors({
    origin: ['http://localhost:3200', 'https://messaging-board-nine.vercel.app'],
    credentials: true,
    exposedHeaders: ["Authorization"]
}));
app.use(express.json());

app.use('/', require('./routes/mainRoutes'));

server.listen(PORT, () => {
    console.log("Running server");
})