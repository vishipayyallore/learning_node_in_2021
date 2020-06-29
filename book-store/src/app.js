'use strict';

const express = require('express');

// Initialized the application
const webApi = express();

// express middleware to handle the json body request
webApi.use(express.json());

// Default Route
webApi.get('/', (request, response) => {
    response.status(200).json("Welcome to Books Web API.");
});

module.exports = webApi;
