'use strict';

const ProfessorDto = require('../models/professorDto');

exports.getaddresses = function (request, response) {
    try {
        console.log('Entered the method.')
        const addresses = ProfessorDto.find({});

        console.log(JSON.stringify(addresses));

        response.status(200)
                .json({
                    name: 'Node Web API',
                    description: 'Default Routes'
                });

    } catch (error) {
        console.error(`Error at AddressBook::Get() Unable to process the request ${error}`);
        response.status(500)
                .json({ message: error });
    }

};
