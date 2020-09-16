'use strict';

import * as dotenv from 'dotenv';
import * as path from 'path';

import { WebApi } from './app';

// Loading Configuration from .env file.
dotenv.config({ path: path.resolve(process.cwd(), 'src/config/appConfig.env') });

const app = new WebApi();
app.connectToDataStore()
    .then(() => {
        app.startTheApplication();
    })
    .catch((error: Error) => {
        console.log(`Unable to start the server. Message: ${error.message}`);
    });
