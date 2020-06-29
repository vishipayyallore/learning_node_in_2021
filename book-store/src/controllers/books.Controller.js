'use strict';

function booksController(Book) {

    function post(request, response) {

        const book = new Book(request.body);

        if (!request.body.title) {
            return response
                .status(400)
                .send('Title field is required');
        }

        book.save();

        return response
            .status(201)
            .json(book);
    }


    return { post };
}

module.exports = booksController;

