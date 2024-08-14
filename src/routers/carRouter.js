const { Router } = require('express');
// =====
const ctrl = require('../controllers/car.controller');


const carRouter = Router();

carRouter.route('/')
    .get(ctrl.getAllCars)
    .post(ctrl.createCar);


module.exports = carRouter;