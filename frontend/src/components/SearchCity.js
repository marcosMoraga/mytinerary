import React from 'react'
import './SearchCity.css'

function SearchCity(props) {
    function handlerChange(e) {
        const elementMatch = props.cities.find(element => element.name === e.target.value)
        props.getImg(elementMatch.img)
    }
    return (
        <div className='search-panel'>
            <select onChange={handlerChange}>
                {props.cities && props.cities.map(element => <option value={element.name} key={element.name} >{element.name}</option>)}
            </select>
        </div>
    )
}

export default SearchCity
