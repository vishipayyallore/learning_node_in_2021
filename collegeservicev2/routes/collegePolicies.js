'use strict';

const router = require('express').Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.send('Policy Documents default route.');
});

router.get('/:policyFile', (req, res) => {

    const policyIdentifier = req.params.policyFile;

    fs.readFile(`documents/${policyIdentifier}.txt`, 'utf8', function (err, contents) {
        if (err) {
            console.error(`Error in reading policy file. ${err}`);
        } else {
            console.log(contents);
            res.send(contents);
        }
    });
});

module.exports = router;

/*
fs.createReadStream(path.join('documents', 'policy1.txt'))
.pipe(zlib.createGzip())
.pipe(res);
*/
