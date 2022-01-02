import axios from 'axios'
const userActions = {

    addUser: (paramUser) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post('http://localhost:4000/api/user/signup', paramUser)
                if (user.data.success && !user.data.error) {
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({ type: 'usuario', payload: { userName: user.data.response.userName, img: user.data.response.img, userID: user.data.response._id } })
                    return { succes: true }
                } else {
                    return { issues: user.data }
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    signIn: (email, password, google) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post('http://localhost:4000/api/user/signin', { email, password, google })
                if (user.data.success && !user.data.error) {
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({ type: 'usuario', payload: { userName: user.data.response.userName, img: user.data.response.img, userID: user.data.response._id } })
                    return { sucess: true }
                } else {
                    return { error: user.data.error }
                }
            } catch (error) {
                console.error(error)
            }
        }
    },
    isAuth: () => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const user = await axios.get('http://localhost:4000/api/user/auth', {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                dispatch({ type: 'usuario', payload: { userName: user.data.response.userName, img: user.data.response.img, userID: user.data.response._id } })
                return { response: user.data.response }
            } catch (error) {
                return { error: 'Unauthorized user, try login again' }
            }
        }
    },
    logout: () => {
        return async (dispatch, getState) => {
            localStorage.removeItem('token')
            dispatch({ type: 'logout' })
        }
    }
}

export default userActions