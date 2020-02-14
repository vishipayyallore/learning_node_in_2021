'use strict';

const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

const AddressBookSchema = mongoose.Schema({
    Id: { 
        type: String, 
        trim: true,
        default: uuid 
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('AddressBook', AddressBookSchema);