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
    fs.readFile(fileName, 'utf8', function (err, contents) {
        if (err) {
            console.log(err);
            response.statusCode = 404;
            response.write(`${fileName} not found`);
        } else {
            response.statusCode = 200;
            response.write(contents);
            // console.log(contents);
        }
        response.end();
    });
}

var port = process.env.PORT || 8080;

webApplication.listen(port, () => {
    console.log(`Web Application is listening on ${port}. http://localhost:${port}`);
});




/*
const homePage = fs.readFileSync(indexFileName)

//readFileContents('index1.html');
fs.readFile(indexFileName, 'utf8', function(err, contents) {
    console.log(contents);
});
*/

    // const data = readFileContents(indexFileName, response);
    // console.log(`Output: ${data}`);

    // response.statusCode = 200;
    // response.write(`<h1>Hello Node !!!</h1> Request Received at: <a href='${request.url}'>${request.url}</a>`);
    // response.write(homePage);
    // response.end();
