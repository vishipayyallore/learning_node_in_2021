'use strict';

const app = require('../../src/app');
const request = require('supertest');

const Book = require('../../src/models/book.Model');
const booksController = require('../../src/controllers/books.Controller')(Book);

describe('Testing /src/app.js', () => {

    let apiServer = request(app);

    beforeEach(() => {

        apiServer = request(app);

    });

    afterEach(() => {
        //TODO: Update this section

    });

    describe('Book Router /books/:bookId().', () => {

        test('Testing', async (done) => {

            Book.findById = jest.fn().mockReturnValue([]);
            const response = await apiServer.get('/api/');

            console.log(`${JSON.stringify(response)}`);

            done();
        });

    });

});