const http = require('http');
const fs = require('fs');

const indexFileName = 'home/index.html';

const webApplication = http.createServer((request, response) => { 

    const homePage = fs.readFileSync(indexFileName)

    //readFileContents('index1.html');
    fs.readFile(indexFileName, 'utf8', function(err, contents) {
        console.log(contents);
    });

    response.statusCode = 200;
    // response.write(`<h1>Hello Node !!!</h1> Request Received at: <a href='${request.url}'>${request.url}</a>`);
    response.write(homePage);
    response.end();
});

function readFileContents(fileName){
    fs.readFile(fileName, 'utf8', function(err, contents) {
        if(err){
            console.log(err);
        } else {
            console.log(contents);
        }
    });
}

var port = process.env.PORT || 8080;

webApplication.listen(port, () => {
    console.log(`Web Application is listening on ${port}. http://localhost:${port}`);
});
