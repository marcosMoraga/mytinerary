import React, { useState } from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'

function SideBar(props) {
    const [sideBar, setsideBar] = useState(true)

    const hanlderSideBar = () => {
        setsideBar(!sideBar)
    }

    return (
        <div className='sidebar-menu'>
            {!sideBar ? '' : (<nav>
                <Link className='button' to='/'>Home</Link>
                <Link className='button' to='/cities'>Cities</Link>
                {props.rdxUserImage === '' && (<><Link className='button' to='/sign-in'>Sign In</Link>
                    <Link className='button' to='/sign-up'>Sign Up</Link></>)}
                {props.rdxUserImage !== '' && (<><button style={{ border: 'none' }} className='button'><img style={{ height: '55px' }} alt='img-user' src={props.rdxUserImage} className='user-logged'></img></button><button style={{ border: 'none' }} className='button' onClick={() => props.rdxLogout()}>Sign out</button></>)}
            </nav>)}

            <div className='action_arrow'>
                {!sideBar ? <i onClick={hanlderSideBar} className="fas fa-chevron-right"></i> : <i onClick={hanlderSideBar} className="fas fa-chevron-left"></i>}
            </div>
        </div>


    )
}

const mapStateToProps = (state) => {
    return {
        rdxUserImage: state.userReducers.img,
    }
}
const mapDispatchToProps = {
    rdxLogout: userActions.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
