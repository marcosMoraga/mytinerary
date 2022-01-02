import React, { Component } from 'react'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
import SignInForm from '../components/SignInForm';
import Header from '../components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from '../components/SideBar';

import './SignIn.css'


class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newUser: {},
            errors: {},
        }
    }
    handlerLogin = async (email, password, google) => {
        const userLogged = await this.props.rdxLogin(email, password, google);
        if (userLogged.sucess) {
            this.props.navigate('/')
            toast.success('Successfully logged in')
        } else {
            toast.error(userLogged.error)
        }
    }
    render() {
        return (
            <>
                <Header imgUrl='/assets/img/sign-in.jpg' />

                <div className='container-signIn-form'>
                    <SideBar />
                    <SignInForm handlerLogin={this.handlerLogin} />
                    <ToastContainer autoClose={4000} />
                </div>
            </>
        )
    }
}

const mapDispatchToProps = {
    rdxLogin: userActions.signIn
}

export default connect(null, mapDispatchToProps)(SignIn)