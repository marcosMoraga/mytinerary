import React, { useRef } from 'react';
import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom'


import './SignInForm.css'
const SignInForm = (props) => {
    const email = useRef()
    const password = useRef()


    function handlerSubmit(e) {
        e.preventDefault()
        props.handlerLogin(email.current.value, password.current.value, false)
    }
    const responseGoogle = (res) => {
        !res.error && res.profileObj.email && props.handlerLogin(res.profileObj.email, res.profileObj.googleId, true)
    }

    return (
        <>
            <form className="sign-form" onSubmit={handlerSubmit}>
                <h2 style={{ fontSize: '1.2rem' }}>LOGIN<i style={{
                    fontSize: '1.2rem', color: '#212164', marginLeft: '1rem'
                }} className="fa fa-users" aria-hidden="true"></i></h2>
                <input type="email" autoComplete='on' ref={email} placeholder="email" />
                <input type="password" autoComplete='on' ref={password} placeholder="password" />
                <input type="submit" value="sign in" />


                <h2>If you don't have an account please <Link className='action-sign-up' to='/sign-up'>sign up</Link> here</h2>

                <GoogleLogin
                    className='btngoogle'
                    clientId="236469815759-9la1rd3cucmt23mn4knelpmf6eakgasm.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}

                />

            </form>
        </>
    )
}

export default SignInForm
