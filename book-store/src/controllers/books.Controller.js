'use strict';

function booksController(Book) {

    async function post(request, response) {

        const book = new Book(request.body);

        // We need to verify both Author Name and Title
        if (!request.body.title) {
            return response
                .status(400)
                .send('Title field is required');
        }

        console.log(JSON.stringify(request.body));
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
