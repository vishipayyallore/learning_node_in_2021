'use strict';

import * as dotenv from 'dotenv';
import * as path from 'path';
import { webApi } from './app';

const _dotenv = dotenv.config({ path: path.resolve(__dirname, './config/appConfig.env')});

// console.log(`DotEnv: ${_dotenv} | CWD: ${path.resolve(process.cwd(), './config/appConfig.env')}`);
console.log(_dotenv);

const port = process.env.PORT || 3060;

webApi.listen(port, () => {
    console.log(`Env Port: ${process.env.PORT}`);
    console.log(`Server Listening at port ${port}. http://localhost:${port}/api`);
});

