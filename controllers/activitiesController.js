
const Activity = require('../models/Activity')
const activitiesControllers = {
    getActivityByItinerary: async (req, res) => {
        try {
            const itineraryId = req.params.id

            const activities = await Activity.findOne({ itinerary: itineraryId })

            res.json(activities)
        } catch (error) {
            console.log(error);
            res.json({ success: false, response: null, error: error })
        }
    },
    addActivity: async (req, res) => {
        const activitiesBody = req.body
        new Activity(activitiesBody).save()
            .then(activities => res.json(activities))
            .catch(error => console.log(error))
    }
}


module.exports = activitiesControllers