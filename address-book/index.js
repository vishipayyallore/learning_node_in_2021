const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json());

// Import Routes
const professorsRoute = require('./routes/professors');
const addressRoute = require('./routes/addresses');

// Middleware (To Import Routes)
app.use('/professors', professorsRoute);
app.use('/api/address', addressRoute);

// Routes
app.get('/', (req, res) => {
    res.send('NodeJS express Web API connecting to MongoDb.');
});

// Connecting to the MongoDb Cloud Instance
mongoose.connect(process.env.MongoDbConnection, {
    useNewUrlParser: true, useUnifiedTopology: true
}, (error) => {
    if (error) {
        console.log(`Error Connecting to Cloud MongoDb ${error}`);
    } else {
        console.log('Connected to MongoDb in Cloud');
    }
});

var port = process.env.PORT || 3060;

// Listen to the server
app.listen(port, () => {
    console.log(`Env Port: ${process.env.PORT}`);
    console.log(`Server Listening at port ${port}. http://localhost:${port}`);
});

