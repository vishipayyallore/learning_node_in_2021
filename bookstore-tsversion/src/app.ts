'use strict';

import * as express from 'express';

import { morganLogger } from './middleware/logger';
import * as Book from './models/book.Model';

// Initialized the application
export const webApi = express();

// express middleware to handle the json body request
webApi.use(express.json());

// Third Party Logger.
webApi.use(morganLogger);

// Middleware (To Import Additional Routes)
//webApi.use('/api', bookRouter);

// Default Route
webApi.get('/api', (request, response) => {
    
    console.log(JSON.stringify(Book));

    response.status(200).json("Welcome to Books Web API.");
});

/******************************************************************************************************************************/
    // response.send('Some Content'); By default it will send "text/html"

    // Log Request
/*
console.log(`Complete Request: ${request}`);
const { headers, url, method } = request;
console.log(`Headers: ${JSON.stringify(headers)} \nUrl: ${url} \nMethod: ${method}`);
*/
