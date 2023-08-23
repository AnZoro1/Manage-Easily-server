const mongoose = require('mongoose');

const objectSchema = mongoose.Schema({
    name: String,
    area: Number,
    floors: String,
    adress: String,
    isRented: Boolean,
    rentalPrice: Number,
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Owner'
    },
});

const Object = mongoose.model('Object', objectSchema);
module.exports = Object;