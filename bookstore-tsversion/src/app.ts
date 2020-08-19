'use strict';

import * as express from 'express';

// Initialized the application
export const webApi = express();

// express middleware to handle the json body request
webApi.use(express.json());

// Middleware (To Import Additional Routes)
//webApi.use('/api', bookRouter);

// Default Route
webApi.get('/api', (request, response) => {
    response.status(200).json("Welcome to Books Web API.");
});
