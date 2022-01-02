import React, { useRef } from 'react'
import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom'
import './RegisterForm.css'

const countries = ['Chile', 'Alemania', 'Argentina', 'Peru', 'Venezuela', 'Bolivia', 'Canada', 'France', 'United States']


const RegisterForm = (props) => {
    const { handlerAddUser } = props

    const inputUserName = useRef()
    const inputLastName = useRef()
    const inputEmail = useRef()
    const inputpassword = useRef()
    const inputImg = useRef()
    const inputCountry = useRef()

    function handlerSubmit(e) {
        e.preventDefault()
        const newUser = {
            userName: inputUserName.current.value,
            lastName: inputLastName.current.value,
            password: inputpassword.current.value,
            email: inputEmail.current.value,
            img: inputImg.current.value,
            country: inputCountry.current.value
        }
        handlerAddUser(newUser)
        if (!props.errors) {

            inputLastName.current.value = ''
            inputpassword.current.value = ''
            inputEmail.current.value = ''
            inputImg.current.value = ''
            inputUserName.current.value = ''
        }

    }
    const responseGoogle = (res) => {
        if (!res.error) {
            const googleUser = {
                userName: res.profileObj.givenName,
                lastName: res.profileObj.familyName,
                password: res.profileObj.googleId,
                email: res.profileObj.email,
                img: res.profileObj.imageUrl,
                google: true
            }

            props.handlerAddUser(googleUser)
        }
    }

    return (
        <>
            <form className="sign-form" onSubmit={handlerSubmit} >

                <h2 style={{ fontSize: '1.2rem' }}>REGISTRATION<i style={{ marginLeft: '1rem', fontSize: '1.2rem' }} className="fas fa-user-plus"></i></h2>
                <input type="text" ref={inputUserName} name='userName' placeholder='user name' />
                {props.errors.userName && <h2 className="error-input">{props.errors.userName}</h2>}
                <input type="text" ref={inputLastName} name='lastName' placeholder='last name' />
                {props.errors.lastName && <h2 className="error-input">{props.errors.lastName}</h2>}
                <input type="email" ref={inputEmail} name='email' placeholder='email' />
                {props.errors.email && <h2 className="error-input">{props.errors.email}</h2>}
                <input type="text" ref={inputImg} name='urlImg' placeholder='url img' />
                {props.errors.img && <h2 className="error-input">{props.errors.img}</h2>}
                <select defaultValue='default' ref={inputCountry} name='country' >
                    <option value='default'>Select a country</option>
                    {countries.sort().map(country => <option key={country}>{country}</option>)}
                </select>
                <input type="password" ref={inputpassword} name='password' placeholder='password' />
                {props.errors.password && <h2 className="error-input">{props.errors.password}</h2>}
                <input type='submit' value='send' />
                <GoogleLogin
                    className='btngoogle'
                    clientId="236469815759-9la1rd3cucmt23mn4knelpmf6eakgasm.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}

                />
                <h2>if you already have an account <Link className='action-sign-up' to='/sign-in'>sign in</Link> here</h2>

            </form>
        </>
    )
}

export default RegisterForm
