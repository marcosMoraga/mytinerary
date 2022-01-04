

import axios from 'axios'
const itinerariesActions = {
    requestItineraries: (id) => {
        return async (dispatch, state) => {
            const res = await axios.get(`https://mytinerary-moraga.herokuapp.com/api/itineraries/city/${id}`)
            dispatch({ type: 'requestItineraries', payload: res.data.response })
        }
    },
    likeHandler: (itineraryId) => {
        return async (dispatch, state) => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.put(`https://mytinerary-moraga.herokuapp.com/api/like/itinerary/${itineraryId}`, {}, {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                dispatch({ type: 'likes', payload: { itineraryId, likes: res.data.likes, } })
                return { liked: res.data.liked, userID: res.data.userID }

            } catch (error) {
                return { error: 'You have to log in to like an itinerary!' }
            }
        }
    },
    addComment: (itineraryId, text) => async (dispatch) => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.post(`https://mytinerary-moraga.herokuapp.com/api/comments/itinerary/${itineraryId}`, text, {
                headers: { 'Authorization': 'Bearer ' + token }
            })

            return { succes: true, comments: res.data }

        } catch (error) {
            return { succes: false, error: 'You have to log in to comment an itinerary' }
        }
    },
    deleteComment: (itineraryId, commentId) => async (dispatch) => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.delete(`https://mytinerary-moraga.herokuapp.com/api/comments/${commentId}/itinerary/${itineraryId}`, {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            return { succes: true, msg: 'Comment deleted successfully', comments: res.data.comments }
        } catch (error) {
            console.log('error');
        }
    },
    updateComment: (itineraryId, commentId, text) => async (dispatch) => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.put(`https://mytinerary-moraga.herokuapp.com/api/comments/${commentId}/itinerary/${itineraryId}`, { text }, {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            return { succes: true, msg: 'Comment updated successfully', comments: res.data.comments }
        } catch (error) {
            return { error: 'Unauthorized user, try log in again' }
        }
    },


}

export default itinerariesActions