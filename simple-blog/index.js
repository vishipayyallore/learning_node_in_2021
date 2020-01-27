const http = require('http');
const fs = require('fs');

const webApplication = http.createServer((request, response) => { 

    fs.readFileSync('./home/index.html', function(error, data) {
        if(error){
            console.log(`File Not Found`);
        } else {
            console.log(`File Found`);
        }
    });


    response.statusCode = 200;
    response.write(`<h1>Hello Node !!!</h1> Request Received at: <a href='${request.url}'>${request.url}</a>`);
    response.end();
});



var port = process.env.PORT || 8080;

webApplication.listen(port, () => {
    console.log(`Web Application is listening on ${port}. http://localhost:${port}`);
});
