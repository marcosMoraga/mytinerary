
import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import userReducers from './userReducers'

const mainReducer = combineReducers({
    citiesReducer,
    userReducers,
    itinerariesReducer
})

export default mainReducer