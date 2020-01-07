const express = require('express')

const app = express();

// Routes
app.get('/', (req, res) =>{
    res.send('Hello NodeJS. This is my first Web API.')
});

app.get('/professors', (req, res) =>{
    res.send('List of Professors.')
});

app.get('/students', (req, res) =>{
    res.send('List of Students.')
});

// Listen to the server
app.listen(3000);