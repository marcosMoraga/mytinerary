const initialState = {
    userName: '',
    img: '',
    userID: ''
}

const userReducers = (state = initialState, action) => {

    switch (action.type) {
        case 'usuario':
            return {
                ...state,
                userName: action.payload.userName,
                img: action.payload.img,
                userID: action.payload.userID
            }
        case 'logout':
            return {
                ...initialState,
            }
        default:
            return state
    }

}

export default userReducers