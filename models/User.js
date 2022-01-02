const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    img: { type: String, required: true },
    country: { type: String, required: true, default: 'Undefined' },
    google: { type: Boolean, default: false }
})

const User = mongoose.model('user', userSchema)

module.exports = User;