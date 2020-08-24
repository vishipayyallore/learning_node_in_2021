'use strict';

const express = require('express');

const Book = require('./models/book.Model');
const bookRouter = require('./routes/book-Router')(Book);
const logger = require('./middleware/logger');

// Initialized the application
const webApi = express();

// express middleware to handle the json body request
webApi.use(express.json());

webApi.use(logger);

// Middleware (To Import Additional Routes)
webApi.use('/api', bookRouter);

// Default Route
webApi.get('/', (request, response) => {
    response.status(200).json("Welcome to Books Web API.");
});

module.exports = webApi;
