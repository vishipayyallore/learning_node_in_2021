'use strict';

import * as dotenv from 'dotenv';
import * as path from 'path';
const mongoose = require('mongoose');

import { ApplicationLogger } from '../Utilities/application.Logger';

// Loading Configuration from .env file.
dotenv.config({ path: path.resolve(process.cwd(), 'src/config/appConfig.env') });

export class MongoDbHelper {

    // TODO: Move this to Dependency Injection
    private applicationLogger: ApplicationLogger;

    constructor() {
        this.applicationLogger = new ApplicationLogger();
    }

    public connectToMongoDb = () => {

        mongoose.connect(process.env.MongoDbConnection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
            (error: Error) => {

                if (error) {

                    this.applicationLogger.logMessageInRed(`Error Connecting to Cloud MongoDb ${error}`, true);
                    // return Promise.reject(false);
                    // throw new Error(error.message);
                } else {

                    // Connecting to the MongoDb Cloud Instance
                    this.applicationLogger.logMessageInGreen(`Mongo Db Connection: ${process.env.MongoDbConnection}`);
                    this.applicationLogger.logMessageInGreen('Connected to MongoDb in Cloud', true);

                    // return Promise.resolve(true);
                }

            });
    }

}

