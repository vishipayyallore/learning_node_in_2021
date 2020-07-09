'use strict';

const app = require('../../src/app');
const Book = require('../../src/models/book.Model');
const pathToBookRouter = '../../src/routes/book-Router';
const booksController = require('../../src/controllers/books.Controller');

// We'll use this to override require calls in routes
var proxyquire = require('proxyquire');
// This will create stubbed functions for our overrides
var sinon = require('sinon');
// Supertest allows us to make requests against an express object
var supertest = require('supertest');

describe.skip('Testing /src/app.js', () => {

    var request, route;

    const bookController = booksController(Book);

    const _book = {
        author: 'Dummy Author',
        title: 'Node JS',
        dateOfPublish: '01-Jan-2020',
        language: "JavaScript",
        read: false
    };

    beforeEach(() => {

        bookController.get = jest.fn().mockResolvedValue([_book]);
        route = proxyquire(pathToBookRouter, {
            '/books': {
                get: bookController.get
            }
        });

        bookController.post = jest.fn().mockResolvedValue(_book);
        route = proxyquire(pathToBookRouter, {
            '/books': {
                post: bookController.post
            }
        });

        // Bind a route to our application
        route(app);

        request = supertest(app);
    });

    // /Get API Route
    describe('App :: /get Route', () => {

        it('API Should return default response', async function (done) {

            request.get('/books')
                .expect('Content-Type', /json/)
                .expect(404, function (error, response) {
                    expect(response.status).toBe(404);
                    done();
                });

            /*
            request.post('/books')
                .send(_book)
                .expect('Content-Type', /json/)
                .expect(200, function (error, response) {
                    expect(response.status).toBe(200);
                    done();
                });
            */

            /*
            .expect('Content-Type', /json/)
            .expect(404, function (error, response) {
                expect(response.status).toBe(404);
                done();
            });
            */
            /*
            const response = await apiServer.get('/');

            expect(response.status).toBe(200);
            expect(JSON.parse(response.text)).toBe(defaultMessage);
            */

        });

    });

});


/*request(app)
    .get('/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);*/

                // console.log(`${JSON.parse(response.text)}`);

