const express = require('express');
const morgan = require('morgan');
// =====
const stockRouter = require('./routers');
const { errorHandlers: { mongooseErrorHandler, errorHandler, yupValidationErrorHandler } } = require('./middleware')
const { Type } = require('./models');


const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api', stockRouter);
app.use(mongooseErrorHandler, yupValidationErrorHandler, errorHandler);


module.exports = app;