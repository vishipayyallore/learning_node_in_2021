const express = require('express');
const router = express.Router();
const ProfessorDto = require('../models/professorDto');

router.get('/', (req, res) => {
    res.send('Professors default route.');
});

router.get('/list', (req, res) => {
    res.send('List of Professors.');
});

router.post('/', (req, res) => {
    // console.log(`Input Received ${req.body}`);
    console.log(req.body);

    const professor = new ProfessorDto({
        professorId: req.body.professorId,
        date: req.body.date
    });

    professor
        .save()
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(error => {
            console.error('Unable to process the request');
            res.json({message: error});
        });

});

module.exports = router;
