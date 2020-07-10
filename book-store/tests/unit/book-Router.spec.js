'use strict';

var sinon = require('sinon');
var express = require('express');

describe('Testing /src/routes/bookRouter.js', () => {

    describe('router', () => {
        let expressStub, controllerStub, RouterStub, rootRouteStub, idRouterStub


    });

    test.skip('Validate Book Routes', () => {

        const routerStub = {
            route: sinon.stub().returnsThis(),
            get: sinon.stub().returnsThis(),
        };

        sinon.stub(express, 'Router').callsFake(() => routerStub);
        require('../../src/routes/book-Router');
        // sinon.assert.calledWith(routerStub.route, '/books', {});
        sinon.assert.calledWith(routerStub.get, sinon.match.func);
    });

});

