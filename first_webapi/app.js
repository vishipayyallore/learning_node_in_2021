const express = require('express')

const app = express();

// Routes
app.get('/', (req, res) =>{
    res.send('Hello NodeJS. This is my first Web API.')
});

// Listen to the server
app.listen(3000);