'use strict';

import * as dotenv from 'dotenv';
import * as path from 'path';
import { webApi } from './app';
import * as colors from 'colors';

dotenv.config({ path: path.resolve(process.cwd(), 'src/config/appConfig.env') });

const port = process.env.PORT || 3060;

webApi.listen(port, () => {
    logMessage(`Env Port: ${process.env.PORT}`);
    logMessage(`Server Listening at port ${port}. http://localhost:${port}/api`);
});

function logMessage(message: String) {
    console.log(colors.cyan(`${new Date().toISOString()} :: ${message}`).bold);
}

//*************************************************** ***************************************************
// const _dotenv = dotenv.config({ path: path.resolve(__dirname, './config/appConfig.env')});
// console.log(`DotEnv: ${_dotenv} | CWD: ${path.resolve(process.cwd(), './config/appConfig.env')}`);
// console.log(_dotenv, __dirname, process.cwd());