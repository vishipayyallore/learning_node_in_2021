'use strict';

import * as morgan from 'morgan';
import * as chalk from 'chalk';

export const morganLogger = morgan(function (tokens, req, res) {
    return chalk.blue.bold([
        new Date().toISOString(), ':: ',
        'Method:', tokens.method(req, res),
        '\tEnd Point:', tokens.url(req, res),
        '\tStatus:', tokens.status(req, res),
        '\tContent Length:', tokens.res(req, res, 'content-length'),
        '\tResponse Time', tokens['response-time'](req, res), 'ms'
    ].join(' '));
});