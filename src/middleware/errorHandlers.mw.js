const { mongoose } = require('../models');

module.exports.mongooseErrorHandler = (err, req, res, next) => {
    
    if (err instanceof mongoose.Error) {
        return res.status(500).send({
            errors: [{
                    title: 'Mongoose Error',
                    detail: err.message
                }]});
    }

    next(err);
}

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