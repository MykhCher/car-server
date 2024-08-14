const { Router } = require('express');
// =====
const carRouter = require('./carRouter');
const typeRouter = require('./typeRouter');


const stockRouter = Router();

stockRouter.use('/cars', carRouter);
stockRouter.use('/types', typeRouter);


module.exports = stockRouter;