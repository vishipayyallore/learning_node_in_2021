'use strict';

import * as dotenv from 'dotenv';
import { webApi }  from './app';

dotenv.config();

const port = process.env.PORT || 3060;

webApi.listen(port, () => {
    console.log(`Env Port: ${process.env.PORT}`);
    console.log(`Server Listening at port ${port}. http://localhost:${port}/api`);
});

