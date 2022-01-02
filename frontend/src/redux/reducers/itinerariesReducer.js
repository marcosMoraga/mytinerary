const initialState = {
    itineraries: [],
}


const itinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'requestItineraries':
            return {
                ...state,
                itineraries: action.payload
            }
        case 'likes':
            return {
                ...state,
                itineraries: state.itineraries.map(itinerary => itinerary._id === action.payload.itineraryId ? { ...itinerary, likes: action.payload.likes } : itinerary)
            }

        default: return state
    }
}

export default itinerariesReducer