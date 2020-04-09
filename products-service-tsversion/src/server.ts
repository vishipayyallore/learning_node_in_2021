'use strict';

import * as express from 'express';

const webApi = express();

webApi.get('/api/default', (request, response) => {
    response.send('This is Default Route\'s Output.');
});

webApi.listen(5005);
