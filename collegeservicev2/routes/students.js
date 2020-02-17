'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib')
const router = express.Router();

const policyDocuments = ['apple', 'strawberry', 'cherry', 'cranberries'];

router.get('/', (req, res) => {
    res.send('Students default route.');
});

router.get('/list', (req, res) => {
    res.send('List of Students.');
});

router.get('/:policyFile', (req, res) => {

    const policyIdentifier = req.params.policyFile;

    fs.readFile(`documents/${policyIdentifier}.txt`, 'utf8', function(err, contents) {
        if(err){
            console.error(`Error in reading policy1.txt ${err}`);
        } else {
            console.log(contents);
            res.send(contents);
        }
    });

    /*
    fs.createReadStream(path.join('documents', 'policy1.txt'))
    .pipe(zlib.createGzip())
    .pipe(res);
    */
});

module.exports = router;
