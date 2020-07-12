'use strict';

const request = require('supertest');
const app = require('../../src/app');
const httpMock = require('node-mocks-http');
const Book = require('../../src/models/book.Model');
const booksController = require('../../src/controllers/books.Controller')(Book);

describe('Testing /src/app.js', () => {

    const apiServer = request(app);
    let req, res;

    const _book = {
        'author': 'Dummy Author',
        'title': 'Node JS',
        'dateOfPublish': '01-Jan-2020',
        'language': "JavaScript",
        'read': false
    };

    // /Get API Route
    describe('App :: /get Route', () => {

        const defaultMessage = 'Welcome to Books Web API.';

        it('API Should return default response', async function (done) {

            const response = await apiServer.get('/');

            expect(response.status).toBe(200);
            expect(JSON.parse(response.text)).toBe(defaultMessage);

            // req = httpMock.createRequest();
            // req.params.bookId = '5f0745314c16a3084cfa41fc';
            Book.findById = jest.fn().mockReturnValue(_book);
            booksController.getBookById = jest.fn().mockResolvedValue(_book);

            const response1 = await apiServer.get('/api/books/5f0745314c16a3084cfa41fc');
            console.log(`Response 1: ${JSON.stringify(response1)}`);

            done();
        });

    });

});


/*request(app)
    .get('/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);*/

                // console.log(`${JSON.parse(response.text)}`);

