'use strict';

const express = require('express');
const app = express();

const users = require('./06-users-router');

app.use('/users', users);

app.listen(3000);

console.log('Open: http://127.0.0.1/3000');