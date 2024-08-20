const yup = require('yup');
// =====
const { mongoose } = require('../models');
const { errorHandlerSchema } = require('../constants');


module.exports.mongooseErrorHandler = errorHandlerSchema(mongoose.Error, 'Mongoose Error', 422);
module.exports.yupValidationErrorHandler = errorHandlerSchema(yup.ValidationError, 'Yup Validation error', 422);

module.exports.errorHandler = (err, req, res, next) => {

    if(res.headerSent){
        
        return;
    }

    res.status(err?.status ?? 500).send({
        errors: [{
            title: err?.name ?? `Internal server error`,
            details: err?.message ?? `Something went wrong`,
        }],
    });
    
}