const mongoose = require('mongoose');

const objectSchema = mongoose.Schema({
    name: String,
    area: String,
    floors: String,
    address: String,
    isRented: Boolean,
    rentalPrice: String,
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Owner'
    },
});

const Object = mongoose.model('Object', objectSchema);
module.exports = Object;