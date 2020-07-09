'use strict';

const Book = require('../../src/models/book.Model');
const booksController = require('../../src/controllers/books.Controller')(Book);
const httpMock = require('node-mocks-http');

describe('Testing books.Controller /src/controllers/books.Controller.js', () => {

    // Variables.
    let request, response;
    const _book = {
        author: 'Dummy Author',
        title: 'Node JS',
        dateOfPublish: '01-Jan-2020',
        language: "JavaScript",
        read: false
    };

    beforeEach(() => {

        request = httpMock.createRequest();
        response = httpMock.createResponse();

    });

    afterEach(() => {
        //TODO: Update this section

    });

    // Get Book By Id Methods
    describe('Books Controller :: getBookById()', () => {

        test('getBookById() function is defined', async (done) => {

            expect(typeof booksController.getBookById).toBe('function');

            done();
        });

        test('getBookById() function should return 200', async (done) => {

            request.book = _book;

            await booksController.getBookById(request, response);

            expect(response.statusCode).toBe(200);
            expect(response._getJSONData()).toStrictEqual(_book);

            done();
        });

    });


    describe('Books Controller :: getBookById()', () => {

        test('getBookById() function is defined', async () => {

            expect(typeof booksController.getBookById).toBe('function');

        });

    });

});

