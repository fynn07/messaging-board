const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3200;

app.use(cors());
app.use(express.json());
app.use('/', require('./routes/mainRoutes'));

app.listen(PORT, () => {
    console.log("Running server");
})