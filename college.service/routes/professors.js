const express = require('express');
const router = express.Router();
const ProfessorDto = require('../models/professorDto');

router.get('/', (req, res) => {
    res.send('Professors default route.');
});

router.get('/list', async (req, res) => {
    try {
        const professors = await ProfessorDto.find();

        res.status(200)
            .json(professors);
    } catch (error) {
        console.error(`Professors::Post V2 Unable to process the request ${error}`);
        res.status(500)
            .json({ message: error });
    }
});

router.post('/', (req, res) => {
    console.log(req.body);

    const professor = new ProfessorDto({
        professorId: req.body.professorId,
        date: req.body.date,
        name: req.body.name,
        description: req.body.description
    });

    professor
        .save()
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(error => {
            console.error(`Professors::Post V2 Unable to process the request ${error}`);
            res.status(500)
                .json({ message: error });
        });

});

router.post('/v2', async (req, res) => {
    console.log(req.body);

    const professor = new ProfessorDto({
        professorId: req.body.professorId,
        date: req.body.date,
        name: req.body.name,
        description: req.body.description
    });

    try {
        const newProfessor = await professor.save();
        res.status(200)
            .json(newProfessor);
    } catch (error) {
        console.error(`Professors::Post V2 Unable to process the request ${error}`);
        res.status(500)
            .json({ message: error });
    }

});

module.exports = router;
