import Home from './pages/Home'
import Cities from './pages/Cities'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import SignUpSinProps from './pages/SignUp'
import SignInSinProps from './pages/SignIn'
import CityPageSinProps from './pages/CityPage'
import { withRouter } from './utils/withRouter'
import citiesActions from './redux/actions/citiesActions'
import { ToastContainer, toast } from 'react-toastify';
import userActions from './redux/actions/userActions';

const CityPage = withRouter(CityPageSinProps)
const SignUp = withRouter(SignUpSinProps)
const SignIn = withRouter(SignInSinProps)

const App = ({ rdxRequest, rdxUserName, rdxAuth, rdxLogin }) => {
  useEffect(() => {
    async function fetchData() {
      const user = await rdxAuth();
      user.error && toast(user.error)
      user.response && rdxLogin(user.response.email, user.response.password, user.response.google)
    }
    localStorage.getItem('token') && fetchData();
    rdxRequest()
  }, [rdxRequest, rdxAuth, rdxLogin])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cities' element={<Cities />} />
        {rdxUserName === '' && <>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </>}
        <Route path='/city/:id' element={<CityPage />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  )
}
const mapStateToProps = (state) => {
  return {
    rdxUserName: state.userReducers.userName
  }
}

const mapDispatchToProps = {
  rdxRequest: citiesActions.requestCities,
  rdxAuth: userActions.isAuth,
  rdxLogin: userActions.signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
