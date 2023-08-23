const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    ownerName: {
        type: String,
        required: true,
        unique: true,
        min: 2,
        max: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    }
});

const Owner = mongoose.model('Owner', ownerSchema);
module.exports = Owner;