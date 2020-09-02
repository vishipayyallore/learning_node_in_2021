'use strict';

import * as express from 'express';

import { morganLogger } from './middleware/logger.middleware';
import { AppRouter } from './routes/app.Router';
import { BooksRouter } from './routes/books-Router';

// Initialized the application
export const webApi = express();

// express middleware to handle the json body request
webApi.use(express.json());

// Third Party Logger.
webApi.use(morganLogger);

// Default Route
webApi.use('/api/v1', new AppRouter().appRoutes);

// Middleware (To Import Additional Routes)
webApi.use('/api/v1', new BooksRouter().bookRoutes);

webApi.get('/api', (request, response) => {
    response.status(200).json({ success: true, message: 'Welcome to Books Web API.', data: {} });
});

/******************************************************************************************************************************/
    // response.send('Some Content'); By default it will send "text/html"

    // Log Request
/*
console.log(`Complete Request: ${request}`);
const { headers, url, method } = request;
console.log(`Headers: ${JSON.stringify(headers)} \nUrl: ${url} \nMethod: ${method}`);
*/
