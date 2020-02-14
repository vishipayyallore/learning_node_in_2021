'use strict';

const AddressBookDto = require('../models/addressBookDto');

exports.get = function (request, response) {
    try {
        const addresses = AddressBookDto.find();

        console.log(addresses);

        response.status(200)
                .json(addresses);

    } catch (error) {
        console.error(`Error at AddressBook::Get() Unable to process the request ${error}`);
        response.status(500)
                .json({ message: error });
    }

};
