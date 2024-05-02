const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config()
const app = express();
const PORT = 3200;

app.use(cors());
app.use(express.json());
app.use('/', require('./routes/mainRoutes'));

app.listen(PORT, () => {
    console.log("Running server");
})