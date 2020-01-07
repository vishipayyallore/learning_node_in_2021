const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Professors default route.');
});

router.get('/list', (req, res) => {
    res.send('List of Professors.');
});

module.exports = router;
