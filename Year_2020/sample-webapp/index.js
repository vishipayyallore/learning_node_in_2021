const express = require('express');
const path = require('path');

const webApplication = express();

// *************** MIDDLEWARE ***************************
webApplication.use(express.static('shared'));
// *************** MIDDLEWARE ***************************

// *************** ROUTES ***************************
webApplication.get(['/', '/home'], (request, response) => {
    response.sendFile(path.resolve(__dirname, 'home', 'home.html'));
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
    console.log(`Path Resolve: ${path.resolve(__dirname, 'home', 'home.html')}`);
    console.log(`process.env.PORT: ${process.env.PORT}`);
    console.log(`Web Application is listening on ${port}. http://localhost:${port}`);
});

