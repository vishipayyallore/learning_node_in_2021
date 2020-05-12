'use strict';

import * as express from 'express';

const webApi = express();

function loggerMiddleware(request: express.Request, response: express.Response, next) {
    console.log(`${new Date()} :: ${request.method} ${request.path} ${response.statusCode}`);
    next();
}

webApi.use(loggerMiddleware);

webApi.get('/api/default', (request, response) => {
    response.send('This is Default Route\'s Output.');
});

const port = process.env.PORT || 3060;

webApi.listen(port, () => {
    console.log(`Env Port: ${process.env.PORT}`);
    console.log(`Server Listening at port ${port}. http://localhost:${port}/api/default`);
});
