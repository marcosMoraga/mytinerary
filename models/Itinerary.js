const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    user: {
        name: { type: String, required: true },
        img: { type: String }
    },
    price: { type: Number, required: true, min: 1, max: 5 },
    duration: { type: Number, required: true },
    hashtags: [{ type: String }],
    likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    comments: [{ user: { type: mongoose.Types.ObjectId, ref: 'user' }, text: { type: String, required: true }, name: { type: String, required: true }, img: { type: String, required: true }, date: { type: Date, default: Date.now } }],
    cities: [{ type: mongoose.Types.ObjectId, ref: 'city', required: true }]
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)



module.exports = Itinerary