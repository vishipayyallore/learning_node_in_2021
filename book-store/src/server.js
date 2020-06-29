'use strict';

const webApi = require('./app');

var port = process.env.PORT || 3000;

// Listen to the server
webApi.listen(port, () => {
    console.log(`Env Port: ${process.env.PORT}`);
    console.log(`Server Listening at port ${port}. http://localhost:${port}`);
});
