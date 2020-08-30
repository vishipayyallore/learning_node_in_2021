'use strict';

const morgan = require('morgan')
const chalk = require('chalk');

// Logger Middleware
const morganLogger = morgan(function (tokens, req, res) {
  return chalk.blue.bold([
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' '));
});

module.exports = morganLogger;

/*
const logger = (req, res, next) => {

    console.log(
      `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    );

    next();

};
*/

