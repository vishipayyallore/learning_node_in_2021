'use strict';

import * as mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    author: { type: String, required: true },

    title: { type: String, required: true },

    dateOfPublish: { type: Date, required: true, default: new Date().toUTCString() },

    language: { type: String, default: 'C#' },

    read: { type: Boolean, default: false }
});

export const bookModel = mongoose.model('Book', bookSchema);

// export default bookModel;
