const { Car, Type } = require('../models');

class CarController {
    getAllCars(req, res, next) {
        Car.find()
            .then(cars => {
                res.status(200).json(cars);
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
}

module.exports = new CarController();