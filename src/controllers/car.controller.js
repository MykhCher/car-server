const createError = require('http-errors');
// =====
const { Car, Type } = require('../models');
const { create } = require('../models/type');

class CarController {
    getAllCars(req, res, next) {

        const { offset, limit } = req.pagination;

        Car.find().populate('typeId', 'title -_id').skip(offset).limit(limit)
            .then(cars => {
                res.status(200).json(cars);
            })
            .catch(err => next(err));
    }

    getCarById(req ,res, next) {

        const { id } = req.params;

        Car.findById(id).populate('typeId', 'title -_id')
            .then(car => {
                car
                    ? res.status(200).json(car)
                    : next(createError(404, `car id=${id} not found`));
            })
            .catch(err => next(err));
    }

    getCarByAttr(req, res, next) {

        const {brand, color} = req.query;

        Car.find({
            brand: brand instanceof Array 
                ? {$in: brand}
                : (brand ?? {$ne: '_'}),
            color: color instanceof Array 
                ? {$in: color}
                : (color ?? {$ne: '_'}),
        })
            .then(cars => {
                cars
                    ? res.status(200).json(cars)
                    : next(createError(404, `cars not found`));
            })
            .catch(err => next(err));
    }

    createCar(req, res, next) {

        const { body } = req;

        if (body.type) {
            Type.findOne({title: body.type}, '_id')
                .then(type => {
                    if (type) {
                        body.typeId = type._id
                        Car.create(body)
                            .then(newCar => {
                                res.status(201).json(newCar)
                            })
                    } else {
                        res.send('type not found');
                    }
                })
                .catch(err => next(err));

                return ;
        }
     
        Car.create(body)
            .then(newCar => {
                res.status(200).json(newCar)
            })
            .catch(err => next(err));
    } 

    updateCar(req, res, next) {

        const { body } = req;

        Car.findByIdAndUpdate(body._id, {$set: body})
            .then(updatedCar => {
                body.type 
                    ? Type.findOne({title: body.type}, '_id')
                        .then(type => {
                            if (type) {
                                updatedCar.typeId = type._id;
                                updatedCar.save();
                                res.status(202).json(`updated car id=${updatedCar._id}`);
                            } else {
                                next(createError(404, `type title=${body.type} not found`))
                            }
                        })
                    : res.status(202).json(`updated car id=${updatedCar._id}`);
            })
            .catch(err => next(err));

    }

    deleteCarById(req, res, next) {

        const { id } = req.params;

        Car.findByIdAndDelete(id)
            .then(obj => {
                obj
                    ? res.status(200).send(`deleted car id=${obj._id}`)
                    : next(createError(404, `car id=${id} not found`));
            })
            .catch(err => next(err));
    }

    uploadLogo(req, res, next) {
        const { file: {filename}, params: {id} } = req;

        Car.findByIdAndUpdate(id, {$set: {logo: filename}})
            .then(obj => {
                obj
                    ? res.status(201).send(`updated car id=${obj._id}`)
                    : next(createError(404, `car id=${id} not found`));
            })
            .catch(err => next(err));
    }
}

module.exports = new CarController();