const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config()
const app = express();
const server = require('http').createServer(app);
const PORT = 3200;

var corsOptions = {
    origin: 'https://messaging-board-nine.vercel.app/',
    optionsSuccessStatus: 200 
  }

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', require('./routes/mainRoutes'));

server.listen(PORT, () => {
    console.log("Running server");
})