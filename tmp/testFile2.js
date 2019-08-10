const express = require('express');
const app = express();
const compression = require('compression');
const csurf = require('csurf');

app.use(require('body-parser').json());

app.use(
    require('cookie-session')({
        secret: 'I am nearly always happy.',
        maxAge: 24 * 60 * 60 * 1000,
    })
);

app.use(csurf());

app.use(function(req, res, next) {
    res.cookie('mytoken', req.csrfToken());
    next();
});

const pwUtils = require('./pwUtils.js');
const dbUtils = require('./dbUtils.js');
