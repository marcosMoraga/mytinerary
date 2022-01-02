import React from 'react'
// array mas pos 
import './CarrouselItem.css'
import { useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';

function CarrouselItem(props) {
    const tablet = useMediaQuery('(max-width:1023px)');
    return (
        <div className="carrousel" >
            <div className="inner-top">
                {tablet && <i onClick={() => props.up()} className="fa fa-chevron-up" aria-hidden="true"></i>}
                <div className='image-content'>
                    <Link className='red' to={`/city/${props.arrayDatosCarrousel[0]._id}`} >
                        <div style={{ backgroundImage: `url(${props.arrayDatosCarrousel[0].img})` }} className='first-image' >
                            <h2>{props.arrayDatosCarrousel[0].name} - {props.arrayDatosCarrousel[0].country}</h2>
                        </div>
                    </Link>
                    <Link className='black' to={`/city/${props.arrayDatosCarrousel[1]._id}`} >
                        <div style={{ backgroundImage: `url(${props.arrayDatosCarrousel[1].img})` }} className='second-image' >
                            <h2>{props.arrayDatosCarrousel[1].name} - {props.arrayDatosCarrousel[1].country}</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="inner-down">
                <div className='image-content'>
                    <Link className='orange' to={`/city/${props.arrayDatosCarrousel[2]._id}`} >
                        <div style={{ backgroundImage: `url(${props.arrayDatosCarrousel[2].img})` }} className='third-image'>
                            <h2>{props.arrayDatosCarrousel[2].name} - {props.arrayDatosCarrousel[2].country}</h2>
                        </div>
                    </Link>
                    <Link className='green' to={`/city/${props.arrayDatosCarrousel[3]._id}`} >
                        <div style={{ backgroundImage: `url(${props.arrayDatosCarrousel[3].img})` }} className='last-image' >
                            <h2>{props.arrayDatosCarrousel[3].name} - {props.arrayDatosCarrousel[3].country}</h2>
                        </div>
                    </Link>
                </div>
                {tablet && <i onClick={() => props.down()} className="fa fa-chevron-down" aria-hidden="true"></i>}
            </div>
        </div>
    )



}

export default CarrouselItem
