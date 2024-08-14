const express = require('express');
const morgan = require('morgan');
// ===
const { Type, Car } = require('./models');


const app = express();

app.use(express.json());
app.use(morgan('dev'));


module.exports = app;