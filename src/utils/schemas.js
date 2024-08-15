const yup = require('yup');

module.exports.paginationSchema = yup.object().shape({
    limit: yup.number().integer().min(1).max(100),
    offset: yup.number().integer().min(0).max(100)
})