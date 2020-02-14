const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

const AddressBookSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true
    },
    pincode: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('AddressBook', AddressBookSchema);

