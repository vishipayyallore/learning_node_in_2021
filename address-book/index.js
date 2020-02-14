'use strict';

const express = require('express');
const webApi = express();

webApi.get('/', (request, response) => {
    response.send('NodeJS express Web API connecting to Atlas MongoDb.');
});

const port = process.env.PORT || 3010

webApi.listen(port, () => {
    console.log(`Env Port: ${process.env.PORT}`);
    console.log(`Server Listening at port ${port}. http://localhost:${port}`);
});
