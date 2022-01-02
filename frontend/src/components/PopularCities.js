import React from 'react'
import Carrousel from './Carrousel'
import './PopularCities.css'
// rafce
const PopularCities = () => {
    return (
        <div className='popular-cities' >
            <Carrousel autoplay={true} />
        </div>
    )
}

export default PopularCities
