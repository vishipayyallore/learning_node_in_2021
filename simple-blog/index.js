const http = require('http');
const fs = require('fs');

const indexFileName = 'index.html';

const webApplication = http.createServer((request, response) => { 

    const homePage = fs.readFileSync(indexFileName)

    fs.readFile(indexFileName, 'utf8', function(err, contents) {
        console.log(contents);
    });

    response.statusCode = 200;
    // response.write(`<h1>Hello Node !!!</h1> Request Received at: <a href='${request.url}'>${request.url}</a>`);
    response.write(homePage);
    response.end();
});



var port = process.env.PORT || 8080;

webApplication.listen(port, () => {
    console.log(`Web Application is listening on ${port}. http://localhost:${port}`);
});
