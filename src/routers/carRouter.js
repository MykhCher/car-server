const { Router } = require('express');
// =====
const ctrl = require('../controllers/car.controller');
const {paginate: {paginate}, validate: {validateCars}, upload: {uploadLogo}} = require('../middleware')


const carRouter = Router();

carRouter.route('/')
    .get(paginate, ctrl.getAllCars)
    .post(validateCars, ctrl.createCar)
    .patch(validateCars, ctrl.updateCar);

carRouter.get('/attr', ctrl.getCarByAttr);

carRouter.route('/:id')
    .get(ctrl.getCarById)
    .delete(ctrl.deleteCarById);

carRouter.patch('/:id/logo', uploadLogo.single('logo'), ctrl.uploadLogo);


module.exports = carRouter;