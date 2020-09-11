'use strict';

import * as dotenv from 'dotenv';
import * as path from 'path';
const mongoose = require('mongoose');

// Loading Configuration from .env file.
dotenv.config({ path: path.resolve(process.cwd(), 'src/config/appConfig.env') });

export class MongoDbHelper {

    constructor() {
    }

    public connectToMongoDb = async () => {

        await mongoose.connect(process.env.MongoDbConnection, {

            useNewUrlParser: true,
            useUnifiedTopology: true

        }, (error: Error) => {

            if (error) {

                console.log(`Error Connecting to Cloud MongoDb ${error}`);
                throw new Error(error.message);

            } else {

                // Connecting to the MongoDb Cloud Instance
                console.log(`Mongo Db Connection: ${process.env.MongoDbConnection}`);
                console.log('Connected to MongoDb in Cloud');

            }

        });
    }

}

