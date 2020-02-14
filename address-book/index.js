'use strict';

const express = require('express');
const webApi = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Importing the Routes
const apiRoutes = require('./routes/api-routes');

// Adding Middleware
webApi.use(bodyParser.urlencoded({
    extended: true
}));
webApi.use(bodyParser.json());

// Default Routes
webApi.get('/', (request, response) => {
    response.send('NodeJS express Web API connecting to Atlas MongoDb.');
});

// Adding API Routes
webApi.use('/api', apiRoutes);

// Connecting to the MongoDb Cloud Instance
mongoose.connect(process.env.MongoDbConnection, {
    useNewUrlParser: true, useUnifiedTopology: true
}, (error) => {
    if (error) {
        console.log(`Error Connecting to Cloud MongoDb ${error}`);
    } else {
        console.log('Connected to MongoDb in Cloud');
    }
});

const port = process.env.PORT || 3020;
webApi.listen(port, () => {
    console.log(`Env Port: ${process.env.PORT}`);
    console.log(`Server Listening at port ${port}. http://localhost:${port}`);
});
