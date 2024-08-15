const createError = require('http-errors');
// =====
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

    updateType(req, res, next) {

        const {_id, title} = req.body

        Type.findByIdAndUpdate(_id, {title})
            .then(updatedType => {
                res.status(202).json(`updated type id=${updatedType._id}`);
            })
            .catch(err => next(err));
    }

    deleteType(req, res, next) {
        const { id } = req.params;

        Type.deleteOne({_id: id})
            .then(deleted => {
                deleted.deletedCount
                    ? res.status(202).send(`deleted ${deleted.deletedCount} type${deleted.deletedCount === 1 ? '' : 's'}`)
                    : next(createError(404, `type id=${id} not found`));
            })
            .catch(err => next(err));
    }
}

module.exports = new TypeController();