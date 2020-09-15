'use strict';

import * as dotenv from 'dotenv';
import * as path from 'path';

import { WebApi } from './app';
import { ApplicationLogger } from './Utilities/application.Logger';
import { MongoDbHelper } from './Persistence/mongoDb.Helper';

// Loading Configuration from .env file.
dotenv.config({ path: path.resolve(process.cwd(), 'src/config/appConfig.env') });

const applicationLogger = new ApplicationLogger();
const app = new WebApi();

app.connectToDataStore();
app.startTheApplication();

/*
const mongoDbHelper = new MongoDbHelper();

mongoDbHelper
    .connectToMongoDb()
    .then(() => {

        applicationLogger.logMessageInBlue(`Env Port: ${process.env.PORT}`);
        const PORT = process.env.PORT || 3060;

        app.webApi.listen(PORT, () => {
            applicationLogger.logMessageInBlue(`Server Listening at port ${PORT}. http://localhost:${PORT}/api`, true);
        });
    })
    .catch((error: Error) => {

        applicationLogger.logMessageInRed(`Error:: Unable to connect to Mongo Database. Message:: ${error.message}`);
    });
*/

/*
mongoose.connect(process.env.MongoDBCONNECTION, {

    useNewUrlParser: true,
    useUnifiedTopology: true

}, (error) => {

    if (error) {

        logRedMessage(`Error Connecting to Cloud MongoDb ${error}`);
        throw new Error(error);

    } else {

        // Connecting to the MongoDb Cloud Instance
        logGreenMessage(`Mongo Db Connection: ${process.env.MongoDBCONNECTION}`);
        logGreenMessage('Connected to MongoDb in Cloud');
    }

});
*/

/*
function logMessage(message: String) {
    console.log(colors.cyan(`${new Date().toISOString()} :: ${message}`).bold);
}

function logGreenMessage(message: String) {
    console.log(colors.green(`${new Date().toISOString()} :: ${message}`).bold);
}

function logRedMessage(message: String) {
    console.log(colors.red(`${new Date().toISOString()} :: ${message}`).bold);
}

function logColoredMessage(message: String, color: colors.Color = colors.blue) {
    console.log(color(`${new Date().toISOString()} :: ${message}`).bold);
}

applicationLogger.logMessageInCyan('Message in Cyan');
applicationLogger.logMessageInBlue('Message in Blue');
applicationLogger.logMessageInGreen('Message in Green');
applicationLogger.logMessageInRed('Message in Red');

*/