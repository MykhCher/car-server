module.exports = (errorObject, errorName, statusCode) => {
    return function(err, req, res, next) {
    
        if (err instanceof errorObject) {
            return res.status(statusCode ?? 500).send({
                errors: [{
                        title: errorName,
                        detail: err.message
                    }]});
        }
    
        next(err);
    }
}