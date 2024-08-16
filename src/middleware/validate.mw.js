const { carSchema } = require('../utils/schemas');

module.exports.validateCars = (req, res, next) => {
    const car = req.body;

    carSchema.validate(car)
        .then(validatedCar => {
            req.body = validatedCar;
            next()
        })
        .catch(err => next(err));
}