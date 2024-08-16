const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: String,
    year: {
        type: Date,
    }, 
    color: String,
    engine_type: String,
    bodywork_type: String,
    gear_type: String,
    new: Boolean,
    logo: String,
    typeId: {
        type: mongoose.ObjectId,
        ref: 'Type'
    }
}, {
    timestamps: true,
    versionKey: false
});

const Car = mongoose.model('Car', carSchema); 

module.exports = Car;