const http = require('http');

const httpHeaders = { 'Content-Type': 'text/plain', 'Cache-Control': 'max-age=180' };

const webApi = http.createServer((request, response) => {

    // Sending Http Header, Status, Content Type
    response.writeHead(200, httpHeaders);

    var headersObject = JSON.parse(httpHeaders);
    var lines = headersObject.Files.Lines;
    var keys = Object.keys(lines);

    keys.array.forEach(element => {
        response.write(`Keys ${element}`);
    });

    headersObject.Files.Lines.array.forEach(element => {
        response.write(`Data ${element}`);
    });

    response.write('\nThe Server Application.');
    response.end();
});

const port = process.env.PORT || 8090;

webApi.listen(port, () => {
    console.log(`process.env.PORT: ${process.env.PORT}`);
    console.log(`Web Application is listening on ${port}. Click http://localhost:${port} to view the application.`);
});

