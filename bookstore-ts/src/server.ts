'use strict';

import * as dotenv from 'dotenv';
import * as path from 'path';
import { WebApi } from './app';
import * as colors from 'colors';
const mongoose = require('mongoose');

// Loading Configuration from .env file.
dotenv.config({ path: path.resolve(process.cwd(), 'src/config/appConfig.env') });

logMessage(`Env Port: ${process.env.PORT}`);
const PORT = process.env.PORT || 3060;

mongoose.connect(process.env.MongoDBCONNECTION, {

    useNewUrlParser: true,
    useUnifiedTopology: true

}, (error) => {

    if (error) {

        logMessageR(`Error Connecting to Cloud MongoDb ${error}`);
        throw new Error(error);

    } else {

        // Connecting to the MongoDb Cloud Instance
        logMessageG(`Mongo Db Connection: ${process.env.MongoDBCONNECTION}`);
        logMessageG('Connected to MongoDb in Cloud');
    }

});

const app = new WebApi();

app.webApi.listen(PORT, () => {
    logMessage(`Server Listening at port ${PORT}. http://localhost:${PORT}/api`);
});

function logMessage(message: String) {
    console.log(colors.cyan(`${new Date().toISOString()} :: ${message}`).bold);
}

function logMessageG(message: String) {
    console.log(colors.green(`${new Date().toISOString()} :: ${message}`).bold);
}

function logMessageR(message: String) {
    console.log(colors.red(`${new Date().toISOString()} :: ${message}`).bold);
}