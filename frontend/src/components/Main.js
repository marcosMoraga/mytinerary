import React, { useState, useEffect } from 'react'
import './Main.css';
import PopularCities from './PopularCities';
import SideBar from './SideBar';
import { Link } from 'react-router-dom'
import City from './City';
import SearchCity from './SearchCity'
import { useMediaQuery } from '@material-ui/core';
import FilterCity from './FilterCity';
import Footer from './Footer';

import citiesActions from '../redux/actions/citiesActions'
import { connect } from 'react-redux'


const Main = ({ rdxRequest, ...props }) => {

    useEffect(() => (props.auxiliar && (props.auxiliar.length === '' || props.auxiliar.length === 2)) && rdxRequest())

    const phone = useMediaQuery('(max-width:768px)');

    const [selected, setSelected] = useState('')

    const [isAllCities, setIsAllCities] = useState(false)

    function handlerCitiesLink() {
        setIsAllCities(!isAllCities)
    }

    function getImg(urlParam) {
        let filteredData = props.cities.find(element => element.img === urlParam)
        setSelected(filteredData)
    }

    return (
        <>
            <main>
                <SideBar />
                {!isAllCities && (<div className={props.page}>
                    <div className='title'>
                        {props.title}
                    </div>
                    <div className='subtitle'>
                        <p>{props.subtitle}</p>
                    </div>
                    {(props.city && phone && !isAllCities && props.cities[1]) && (<div className='filter-city' > {selected !== '' ? <FilterCity imgUrl={selected} /> : <City width='100%' city={props.cities[0]} />} </div>)}
                    {props.city && <> <SearchCity cities={props.cities} getImg={getImg} /><div className='action-all-cities'>
                        <button onClick={handlerCitiesLink}>to All Cities</button>
                    </div> </>
                    }

                    {props.home && (
                        <div className='slogan'>
                            <p>{props.rdxUserName && props.rdxUserName.toUpperCase()} FIND YOUR PERFECT TRIP</p>
                            <Link className='toLink-Cities' to='/cities'>ENJOY THE JOURNEY!</Link>
                            {phone && <PopularCities />}
                        </div>
                    )}
                </div>)}
                {isAllCities && <div className='all-cities'>

                    {props.city && (
                        <>
                            <div className='filters'>
                                <input type="text" className="input" autoComplete="off" name="filtro" onChange={(e) => props.actionFilter(props.auxiliar, e.target.value.trim())} placeholder="Filter by city" />
                                <div className='action-all-cities'>
                                    <button onClick={handlerCitiesLink}>to quick search</button>
                                </div>
                            </div>
                            <div className='container-cities'>
                                {
                                    props.cities.length > 0 && props.cities.map((city) => {
                                        return <City key={city.country} width={`${phone ? '100%' : '48%'}`} city={city} />
                                    })

                                }
                                {props.cities.length === 0 && <h2 className="no-data">No data</h2>}
                            </div>

                        </>
                    )}
                </div>}
                {(props.city && !phone && !isAllCities && props.cities[0]) && (<div className='filter-city' > {selected !== '' ? <FilterCity imgUrl={selected} /> : <City width='100%' city={props.cities[0]} />} </div>)}

                {props.home && !phone && <PopularCities />}

            </main>
            {props.city && isAllCities && <Footer />}
        </>
    )
}
const mapDispatchToProps = {
    rdxRequest: citiesActions.requestCities
}
const mapStateToProps = (state) => {
    return {
        rdxUserName: state.userReducers.userName
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

// TODO: DATA NOT FOUND CITIES - RESPONSIVE CITIESPAGE - extra: USECONTEXT(DATA) 