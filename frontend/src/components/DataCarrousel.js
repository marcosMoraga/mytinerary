import React from 'react'
import CarrouselItem from './CarrouselItem'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'


const DataCarrousel = ({ rdxRequest, rdxCities, ...props }) => {

    const auxCities = []

    if (rdxCities.length > 0) {

        const firstSlide = rdxCities.slice(0, 4)
        const secondtSlide = rdxCities.slice(4, 8)
        const thridSlide = rdxCities.slice(8, 12)
        auxCities.push(firstSlide)
        auxCities.push(secondtSlide)
        auxCities.push(thridSlide)

        props.takeArray(auxCities)
    }



    return (

        rdxCities.length > 0 && <CarrouselItem up={props.up} down={props.down} arrayDatosCarrousel={auxCities[props.pos]} />

    )
}
const mapStateToProps = (state) => {
    return {

        rdxCities: state.citiesReducer.auxiliary
    }
}
const mapDispatchToProps = {
    rdxRequest: citiesActions.requestCities
}

export default connect(mapStateToProps, mapDispatchToProps)(DataCarrousel)
