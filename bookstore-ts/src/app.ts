'use strict';

import * as express from 'express';

import { ApplicationLogger } from './Utilities/application.Logger';
import { AppRouter } from './routes/app.Router';
import { BooksRouter } from './routes/books-Router';
import { MongoDbHelper } from './Persistence/mongoDb.Helper';
import { morganLogger } from './middleware/logger.middleware';

const APIPATH = '/api/v1';

export class WebApi {

    // TODO: Move this to Dependency Injection
    private applicationLogger: ApplicationLogger = new ApplicationLogger();

    // Initialized the application
    public webApi = express();

    constructor() {

        this.initialzeMiddleware()
            .then(() => {
                this.initializeRoutes()
                    .catch((error: Error) => {

                        this.applicationLogger.logMessageInRed(`Error in Initializing Routes ${error}`);
                        throw new Error(error.message);
                    })
            })
            .catch((error: Error) => {

                this.applicationLogger.logMessageInRed(`Error in Initializing Middleware ${error}`);
                throw new Error(error.message);
            });
    }

    private initialzeMiddleware = async () => {

        // express middleware to handle the json body request
        // Without json() it will be request.body === undefined
        this.webApi.use(express.json());

        // Third Party Logger.
        this.webApi.use(morganLogger);
    }

    private initializeRoutes = async () => {

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

    public connectToDataStore = async () => {

        const mongoDbHelper = new MongoDbHelper();
        this.applicationLogger.logMessageInYellow(`Connecting to Mongo Database`);

        await mongoDbHelper
            .connectToMongoDb()
            .then(() => {

                // Connecting to the MongoDb Cloud Instance
                this.applicationLogger.logMessageInYellow(`Mongo Db Connection: ${process.env.MongoDbConnection}`);
                this.applicationLogger.logMessageInYellow('Connected to MongoDb in Cloud', true);
            })
            .catch((error: Error) => {

                this.applicationLogger.logMessageInRed(`Error Connecting to Cloud MongoDb ${error}`, true);
                throw new Error(error.message);
            })
    }

    public startTheApplication = async () => {

        this.applicationLogger.logMessageInBlue(`Env Port: ${process.env.PORT}`);
        const PORT = process.env.PORT || 3060;

        this.webApi.listen(PORT, () => {
            this.applicationLogger.logMessageInBlue(`Server Listening at port ${PORT}. http://localhost:${PORT}/api`, true);
        });
    }

}

