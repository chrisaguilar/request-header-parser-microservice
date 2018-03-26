const express = require('express');

const routes = require('./routes');

const app = express();

app.use('/', routes.api);

module.exports = app;
