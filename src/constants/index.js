module.exports.testData = require('./createTestdata');
module.exports.typesData = require('./types');
module.exports.STRING_FIELD_SCHEMA = require('yup').string().min(1).max(255).trim();
module.exports.errorHandlerSchema = require('./errorHandlerSchema');