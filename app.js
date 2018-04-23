const express = require('express');
const db = require('./config/db');
const logger = require('morgan');

const app = express();

app.use(logger('tiny'));
/* '/' route within  UserController will get mapped to '/users'. */
const UserController = require('./user/UserController');

app.use('/users', UserController);

module.exports = app;