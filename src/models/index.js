const mongoose = require('mongoose');
// =====
const Type = require('./type');
const Car = require('./car');


require('dotenv').config();

const HOST = process.env.HOST;
const DB_NAME = process.env.MONGO_DB_NAME;
const PORT = process.env.MONGO_PORT;

mongoose.connect(`mongodb://${HOST}:${PORT}/${DB_NAME}`)
    .then(() => {
        console.log(`Successfully connected to db ${DB_NAME}`);
    })
    .catch(err => {
        console.log(`Connection error: ${err.message}`);
    });


module.exports.Type = Type;
module.exports.Car = Car;