'use strict';

import * as dotenv from 'dotenv';
import * as path from 'path';
import { webApi } from './app';
import * as colors from 'colors';

// Loading Configuration from .env file.
dotenv.config({ path: path.resolve(process.cwd(), 'src/config/appConfig.env') });

logMessage(`Env Port: ${process.env.PORT}`);
const PORT = process.env.PORT || 3060;

webApi.listen(PORT, () => {
    logMessage(`Server Listening at port ${PORT}. http://localhost:${PORT}/api`);
});

function logMessage(message: String) {
    console.log(colors.cyan(`${new Date().toISOString()} :: ${message}`).bold);
}

//*************************************************** ***************************************************
// const _dotenv = dotenv.config({ path: path.resolve(__dirname, './config/appConfig.env')});
// console.log(`DotEnv: ${_dotenv} | CWD: ${path.resolve(process.cwd(), './config/appConfig.env')}`);
// console.log(_dotenv, __dirname, process.cwd());