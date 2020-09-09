'use strict';

import * as express from 'express';

import { morganLogger } from './middleware/logger.middleware';
import { AppRouter } from './routes/app.Router';
import { BooksRouter } from './routes/books-Router';

// Initialized the application
export const webApi = express();
const APIPATH = '/api/v1';

// express middleware to handle the json body request
// Without json() it will be request.body === undefined
webApi.use(express.json());

// Third Party Logger.
webApi.use(morganLogger);

// Default Route
webApi.use(APIPATH, new AppRouter().appRoutes);

// Middleware (To Import Additional Routes)
webApi.use(APIPATH, new BooksRouter().bookRoutes);

webApi.get('/api', (_, response) => {
    response.status(200)
        .json({ success: true, message: 'Welcome to Books Web API.', data: {} });
});
