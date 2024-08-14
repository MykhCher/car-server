const { Router } = require('express');
// =====
const ctrl = require('../controllers/type.controller');


const typeRouter = Router();

typeRouter.route('/')
    .get(ctrl.getAllTypes);


module.exports = typeRouter;
