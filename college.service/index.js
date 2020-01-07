const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express();

var logger = function (req, res, next) {
    console.log(`Middleware will be always execute when user reaches the /professors route ${new Date().toISOString()}`);
    next();
}

// Middleware (Executes the function)
app.use('/professors', (logger));

// Routes
app.get('/', (req, res) => {
    res.send('Hello NodeJS. This is my first Web API.');
});

app.get('/professors', (req, res) => {
    res.send('List of Professors.');
});

app.get('/students', (req, res) => {
    res.send('List of Students.');
});

// Connecting to the MongoDb Local Instance
mongoose.connect(process.env.MongoDbConnection, { 
    useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to local MongoDb');
});

// Listen to the server
app.listen(3000);