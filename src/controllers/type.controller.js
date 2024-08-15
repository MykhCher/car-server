const { Type } = require('../models');

class TypeController {
    getAllTypes(req, res, next) {

        const {pagination: {limit, offset}} = req;

        Type.find().skip(offset).limit(limit)
            .then(types => {
                res.status(200).json(types);
            })    
            .catch(err => next(err));
    }

    createType(req, res, next) {
        Type.create(req.body)
            .then(newType => {
                res.status(200).json(newType);
            })
            .catch(err => next(err));
    }
}

module.exports = new TypeController();