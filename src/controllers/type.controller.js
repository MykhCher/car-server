const { Type } = require('../models');

class TypeController {
    getAllTypes(req, res, next) {
        Type.find()
            .then(types => {
                res.status(200).json(types);
            })    
            .catch(next);
    }

    createType(req, res, next) {
        
    }
}

module.exports = new TypeController();