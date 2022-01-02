import React from 'react'
import './City.css'
import { Link } from 'react-router-dom'

function City(props) {
    return (
        <Link style={{ width: `${props.width}` }} to={'/city/' + props.city._id} className='link-city-card'>
            <div className='city-card' style={{ backgroundImage: `url(${props.city.img})` }} >
                <h2>{props.city.country}</h2>
                <h2>{props.city.name}</h2>
            </div>
        </Link>
    )
}

export default City
