'use strict';

const request = require('supertest');
const app = require('../../src/app');


describe('Testing /src/app.js', () => {

    const apiServer = request(app);

    // /Get API Route
    describe('App :: /get Route', () => {

        const defaultMessage = 'Welcome to Books Web API.';

        it('API Should return default response', async function (done) {

            const response = await apiServer.get('/');

            expect(response.status).toBe(200);
            expect(JSON.parse(response.text)).toBe(defaultMessage);

            done()
        });

    });

});


/*request(app)
    .get('/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);*/

                // console.log(`${JSON.parse(response.text)}`);

