const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }}, {
        timestamps: true,
        versionKey: false
    });

const Type = mongoose.model('Type', typeSchema);

module.exports = Type;