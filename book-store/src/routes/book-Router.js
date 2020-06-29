'use strict';

const express = require('express');
const booksController = require('../controllers/books.Controller');

function routes(Book) {

    const bookRouter = express.Router();
    const _bookController = booksController(Book);

    bookRouter.route('/books')
        .post(_bookController.post);

    return bookRouter;
}

module.exports = routes;
