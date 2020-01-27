const http = require('http');

const webApplication = http.createServer((request, response) => { 
    response.statusCode = 200;
    response.write(`<h1>Hello Node !!!</h1> Request Received at: <a href='${request.url}'>${request.url}</a>`);
    response.end();
});

var port = process.env.PORT || 8080;
console.log(`Web Application is listening on ${port}. http://localhost:${port}`);

webApplication.listen(port);
