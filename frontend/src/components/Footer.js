import React from 'react'

import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className='footer-right'>
                <div className='social-media'>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <div className='author-rights'>
                    COPYRIGHT © 2021 MYTINERARY. ALL RIGHTS RESERVED.
                </div>
            </div>

        </footer>
    )
}

export default Footer
