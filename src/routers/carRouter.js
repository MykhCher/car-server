const { Router } = require('express');
// =====
const ctrl = require('../controllers/car.controller');
const {paginate: {paginate}} = require('../middleware')


const carRouter = Router();

carRouter.route('/')
    .get(paginate, ctrl.getAllCars)
    .post(ctrl.createCar);

carRouter.get('/attr', ctrl.getCarByAttr);

carRouter.route('/:id')
    .get(ctrl.getCarById);


module.exports = carRouter;