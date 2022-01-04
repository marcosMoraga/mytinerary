

import axios from 'axios'

const citiesActions = {
    requestCities: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://mytinerary-moraga.herokuapp.com/api/cities')
            dispatch({ type: 'request', payload: res.data.response.cities })
        }
    },
    requestCity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`https://mytinerary-moraga.herokuapp.com/api/city/${id}`)
            return res.data.response
        }
    },
    filter: (cities, value) => {
        return (dispatch, getState) => {
            dispatch({ type: 'filter', payload: { cities, value } })
        }
    }
}

export default citiesActions