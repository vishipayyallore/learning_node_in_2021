'use strict';

const request = require('supertest');
const app = require('../index');


describe('Students Routes Testing', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true)
    });

    it('Should get the College Policy Default Content', async () => {
        const res = await request(app).get('/policies');
        expect(res.statusCode).toEqual(200);
    });

});
