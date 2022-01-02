import React, { useEffect, useState } from 'react'
import './Carrousel.css'
import DataCarrousel from './DataCarrousel'
import { useMediaQuery } from '@material-ui/core';


const Carrousel = (props) => {
    const [slide, setSlide] = useState(0)
    const [visible, setVisible] = useState(false)
    const [time, setTime] = useState(5000)

    const tablet = useMediaQuery('(min-width:1024px)');
    let tamaño

    useEffect(() => {
        if (props.autoplay) {
            const interval = setInterval(() => {
                handlerUp()
            }, time)
            return () => clearInterval(interval)
        }
    })

    function handlerDown() {
        if ((tamaño - 1) === slide) {
            setSlide(0)
        } else {
            setSlide(prev => prev + 1)
        }
    }
    function handlerUp() {
        if (slide > 0) {
            setSlide(prev => prev - 1)
        } else {
            setSlide(tamaño - 1)
        }
    }
    function onTakeArray(array) {
        tamaño = array.length
    }

    function handlerVisibility() {
        setVisible(!visible)
    }
    function active() {
        setTime(5000)
    }
    function pause() {
        setTime(3600000)

    }
    return (
        <div className="container-carrousel " onMouseLeave={active} onMouseEnter={pause}>
            {visible ? <button onClick={handlerVisibility}>Popular Cities</button> : <button onClick={handlerVisibility}>Hidden Popular Cities</button>}
            {!visible && <>
                {tablet && <i className="fa fa-chevron-up" onClick={handlerUp} aria-hidden="true"></i>}
                <DataCarrousel up={handlerUp} down={handlerDown} pos={slide} takeArray={onTakeArray} />
                {tablet && <i className="fa fa-chevron-down" onClick={handlerDown} aria-hidden="true"></i>}
            </>
            }
        </div>
    )
}

export default Carrousel
