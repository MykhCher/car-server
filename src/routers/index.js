const { Router } = require('express');
// =====
const carRouter = require('./carRouter');


const stockRouter = Router();

stockRouter.use('/cars', carRouter);


module.exports = stockRouter;