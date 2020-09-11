'use strict';

import * as express from 'express';

import { morganLogger } from './middleware/logger.middleware';
import { AppRouter } from './routes/app.Router';
import { BooksRouter } from './routes/books-Router';

const APIPATH = '/api/v1';

export class WebApi {

    // Initialized the application
    public webApi = express();
    
    constructor(){
        
        this.initialzeMiddleware();
        this.initializeRoutes();
    }

    private initialzeMiddleware(){

        // express middleware to handle the json body request
        // Without json() it will be request.body === undefined
        this.webApi.use(express.json());

        // Third Party Logger.
        this.webApi.use(morganLogger);
    }

    private initializeRoutes(){

        // ******************************************** ROUTES ********************************************
        this.webApi.get('/api', (_, response) => {
            response.status(200)
                .json({ success: true, message: 'Welcome to Books Web API.', data: {} });
        });

        // Default Route
        this.webApi.use(APIPATH, new AppRouter().appRoutes);

        // Middleware (To Import Additional Routes)
        this.webApi.use(APIPATH, new BooksRouter().bookRoutes);
    }

}

