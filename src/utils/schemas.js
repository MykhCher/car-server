const yup = require('yup');
// =====
const { STRING_FIELD_SCHEMA } = require('../constants');

module.exports.paginationSchema = yup.object().shape({
    limit: yup.number().integer().min(1).max(100),
    offset: yup.number().integer().min(0).max(100)
})

module.exports.carSchema = yup.object().shape({
    brand: STRING_FIELD_SCHEMA.notOneOf(['_']),
    color: STRING_FIELD_SCHEMA.notOneOf(['_']),
    model: STRING_FIELD_SCHEMA,
    engine_type: STRING_FIELD_SCHEMA,
    bodywork_type: STRING_FIELD_SCHEMA,
    gear_type: STRING_FIELD_SCHEMA,
    new: yup.boolean()
});