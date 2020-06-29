'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookModel = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        dateOfPublish: {
            type: Date,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        language: {
            type: String,
            default: 'C#'
        },
        read: {
            type: Boolean,
            default: false
        }
    }
);

module.exports = mongoose.model('book', bookModel);


