import React from 'react'
import { useState } from 'react';
import './Header.css';
import { connect } from 'react-redux'

const Header = (props) => {

    const [sign, setSign] = useState(false)
    const [settings, setsettings] = useState(false)

    function handlerClickSet() {
        setSign(!sign)
    }
    function handlerSettings() {
        setsettings(!settings)
    }

    return (
        <header>
            <div style={{ backgroundImage: `url(${props.imgUrl})` }} className='background-img'></div>

            <div className="user-icon">
                {sign && <button className='btnsignin'>
                    SIGN-IN
                </button>}
                {props.rdxuserImg === '' && <i onClick={handlerClickSet} className="fa fa-user-circle" aria-hidden="true"></i>}
                {props.rdxuserImg !== '' && <img style={{ height: '65px' }} onClick={handlerSettings} alt='img-user' src={props.rdxuserImg} className='user-logged'></img>}
                {settings && <button className='btnsignup'>
                    SETTINGS
                </button>}
                {sign && <button className='btnsignup'>
                    SIGN-UP
                </button>}
            </div>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        rdxuserImg: state.userReducers.img
    }
}
export default connect(mapStateToProps, null)(Header)
