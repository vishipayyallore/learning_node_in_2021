const http = require('http');
const fs = require('fs');

const indexFileName = 'home/index.html';
const contactUsFileName = 'contactUs/contactUs.html';
const fileNotFound = 'shared/FileNotFound.html';

const webApplication = http.createServer((request, response) => {
    if (request.url === '/home' || request.url === '/') {
        readFileContents(indexFileName, response);
    } else if (request.url === '/contactus') {
        readFileContents(contactUsFileName, response);
    } else {
        readFileContents(fileNotFound, response);
    }
});

function readFileContents(fileName, response) {
    fs.readFile(fileName, 'utf8', (err, contents) => {
        if (err) {
            console.log(err);
            response.statusCode = 404;
            response.write(`File not found`);
        } else {
            response.statusCode = 200;
            response.write(contents);
        }
        response.end();
    });
}

var port = process.env.PORT || 8090;

webApplication.listen(port, () => {
    console.log(`process.env.PORT: ${process.env.PORT}`);
    console.log(`Web Application is listening on ${port}. Click http://localhost:${port} to view the application.`);
});
