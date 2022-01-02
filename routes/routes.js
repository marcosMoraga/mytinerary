const Router = require('express').Router();
const validator = require('../middlewares/validate');
const citiesControllers = require('../controllers/citiesController')
const itinerariesControllers = require('../controllers/itinerariesController')
const passport = require('../middlewares/passport')
const userControllers = require('../controllers/userControllers')
const activitiesControllers = require('../controllers/activitiesController')

const { getActivityByItinerary, addActivity } = activitiesControllers
const { getItineraries, getItinerariesOfCity, addItinerary, updateItinerary, deleteItinerary, getItinerary, likeItinerary, updateComment, addComment, deleteComment, getCommentsByItinerary } = itinerariesControllers
const { getCities, getCity, addCity, updateCity, deleteCity } = citiesControllers
const { addUser, signin, authUser } = userControllers
// cities routes
Router.route('/cities')
    .get(getCities)
    .post(addCity)

Router.route('/city/:id')
    .get(getCity)
    .put(updateCity)
    .delete(deleteCity)

// itineraries routes
Router.route('/itineraries')
    .get(getItineraries)
    .post(addItinerary)

Router.route('/itinerary/:id')
    .get(getItinerary)
    .put(updateItinerary)
    .delete(deleteItinerary)

Router.route('/itineraries/city/:id')
    .get(getItinerariesOfCity)

// itinerary like 
Router.route('/like/itinerary/:id')
    .put(passport.authenticate('jwt', { session: false }), likeItinerary)
// itinerary comments
Router.route('/comments/itinerary/:id')
    .post(passport.authenticate('jwt', { session: false }), addComment)
    .get(getCommentsByItinerary)
// delete comments
Router.route('/comments/:commentID/itinerary/:id')
    .delete(passport.authenticate('jwt', { session: false }), deleteComment)
    .put(passport.authenticate('jwt', { session: false }), updateComment)

//activities
Router.route('/activities')
    .post(addActivity)
Router.route('/activities/:id')
    .get(getActivityByItinerary)

// user Routes
Router.route('/user/signup')
    .post(validator, addUser)
Router.route('/user/signin')
    .post(signin)
Router.route('/user/auth')
    .get(passport.authenticate('jwt', { session: false }), authUser)
module.exports = Router