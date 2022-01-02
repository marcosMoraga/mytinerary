

import axios from 'axios'
const citiesActions = {
    requestCities: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/cities')
            dispatch({ type: 'request', payload: res.data.response.cities })
        }
    },
    requestCity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/city/${id}`)
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