'use strict';

const bookSchemaValidator = require('../models/book.SchemaValidator');

function booksController(Book) {

    async function post(request, response) {

        console.log(JSON.stringify(request.body));

        // We need to verify both Author Name and Title
        const isBookValid = bookSchemaValidator.validate(request.body);
        console.log("validation result", isBookValid);
        if (isBookValid.error) {
            return response.status(400).json(isBookValid.error);
        }

        const book = new Book(request.body);
        await book.save();

        console.log(`Sending Output: ${JSON.stringify(request.body)}`);

        return response
            .status(201)
            .json(book);
    }

    async function get(request, response) {
        try {
            const allBooks = await Book.find({});

            if (allBooks && allBooks.length > 0) {
                response.status(200).json(allBooks);
            } else {
                response.status(404).json();
            }
        } catch (error) {
            response.status(500).json(error);
        }
    }

    return { post, get };
}

module.exports = booksController;
