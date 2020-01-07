const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Import Routes
const professorsRoute = require('./routes/professors');
const studentsRoute = require('./routes/students');

var logger = function (req, res, next) {
    console.log(`Middleware will be always execute when user reaches the /professors route ${new Date().toISOString()}`);
    next();
}

// Middleware (Executes the function)
app.use('/professors', professorsRoute);
app.use('/professors', (logger));
app.use('/students', studentsRoute);

// Connecting to the MongoDb Local Instance
mongoose.connect(process.env.MongoDbConnection, { 
    useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to local MongoDb');
});

// Listen to the server
app.listen(3010);