'use strict';

const request = require('supertest');
const app = require('../index');

describe('Students Routes Testing', () => {

    it('should test that true === true', async (done) => {
        expect(true).toBe(true)
        done();
    });

    it('Should get the College Policy Default Content', async (done) => {
        const res = await request(app).get('/policies');
        expect(res.statusCode).toEqual(200);
        done();
    });

});
