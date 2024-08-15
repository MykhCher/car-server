const { paginationSchema } = require('../utils/schemas');

module.exports.paginate = (req, res, next) => {
    const { page, limit } = req.query;

    const defaultPagination = {
        limit: 10,
        offset: 0
    };

    const pagination = {
        limit: Number(limit) ?? 10, 
        offset: (page-1) * limit 
    }

    paginationSchema.isValid()
        .then(isValid => {
            req.pagination = isValid ? pagination : defaultPagination;
            next();
        })
        .catch(err => next(err));
    
}