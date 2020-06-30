'use strict';

const express = require('express');
const booksController = require('../controllers/books.Controller');

function routes(Book) {

    const bookRouter = express.Router();
    const bookController = booksController(Book);

    bookRouter.route('/books')
        .post(bookController.post);

    return bookRouter;
}

module.exports = routes;
