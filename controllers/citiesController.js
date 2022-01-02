const City = require('../models/City')
const citiesControllers = {
    getCities: (req, res) => {
        City.find()
            .then(cities => res.json({ response: { cities } }))
            .catch(error => console.log(error))
    },
    getCity: (req, res) => {
        const id = req.params.id
        City.findOne({ _id: id })
            .then(city => res.json({ response: city }))
            .catch(error => console.log(error))
    },
    addCity: (req, res) => {
        const cityBody = req.body
        new City(cityBody).save()
            .then(respuesta => res.json({ respuesta }))
            .catch(error => console.log(error))
    },
    updateCity: async (req, res) => {
        const id = req.params.id
        const city = req.body
        let updatedCity
        try {
            updatedCity = await City.findOneAndUpdate({ _id: id }, city, { new: true })
        } catch (err) {
            console.log(err);
        }
        res.json({ success: updatedCity ? true : false })
    },
    deleteCity: async (req, res) => {
        const id = req.params.id
        try {
            await City.findOneAndDelete({ _id: id })
        } catch (error) {
            console.log(error);
        }
        res.json({ success: true })
    }
}


module.exports = citiesControllers