const { Router } = require('express');
// =====
const ctrl = require('../controllers/type.controller');
const { paginate: { paginate } } = require('../middleware');


const typeRouter = Router();

typeRouter.route('/')
    .get(paginate, ctrl.getAllTypes)
    .post(ctrl.createType)
    .patch(ctrl.updateType);

typeRouter.route('/:id')
    .delete(ctrl.deleteType);


module.exports = typeRouter;
