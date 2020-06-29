'use strict';

const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const Book = require('./models/book.Model');
const bookRouter = require('./routes/book-Router')(Book);

// Initialized the application
const webApi = express();

console.log(`Mongo Db Connection: ${process.env.MongoDbConnection}`);

// Connecting to the MongoDb Cloud Instance
mongoose.connect(process.env.MongoDbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (error) {
        console.log(`Error Connecting to Cloud MongoDb ${error}`);
    } else {
        console.log('Connected to MongoDb in Cloud');
    }
});

// express middleware to handle the json body request
webApi.use(express.json());

// Middleware (To Import Additional Routes)
webApi.use('/api', bookRouter);

// Default Route
webApi.get('/', (request, response) => {
    response.status(200).json("Welcome to Books Web API.");
});

module.exports = webApi;
