const express = require('express');
const path = require('path');

const webApplication = express();

// *************** MIDDLEWARE ***************************
webApplication.use(express.static('shared'));
// *************** MIDDLEWARE ***************************

// *************** ROUTES ***************************
webApplication.get(['/', '/home'], (request, response) => {
    response.sendFile(path.resolve(__dirname, 'home', 'index.html'));
});

webApplication.get('/contactus', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'contactUs', 'contactUs.html'));
});

webApplication.get('/api/person', (request, response) => {
    response.json({
        employeeId: 'A101',
        name: 'Shiva Sai',
        isPhd: true
    });
});

webApplication.get('/*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'shared', 'Htmls', 'FileNotFound.html'));
});
// *************** ROUTES ***************************

var port = process.env.PORT || 8060;

webApplication.listen(port, () => {
    console.log(`Directory: ${__dirname}`);
    console.log(`Path Resolve: ${path.resolve(__dirname, 'home', 'index.html')}`);
    console.log(`process.env.PORT: ${process.env.PORT}`);
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
