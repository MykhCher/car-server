const { Router } = require('express');
// =====
const ctrl = require('../controllers/car.controller');
const {paginate: {paginate}, validate: {validateCars}} = require('../middleware')


const carRouter = Router();

carRouter.route('/')
    .get(paginate, ctrl.getAllCars)
    .post(validateCars, ctrl.createCar)
    .patch(validateCars, ctrl.updateCar);

carRouter.get('/attr', ctrl.getCarByAttr);

carRouter.route('/:id')
    .get(ctrl.getCarById);


module.exports = carRouter;