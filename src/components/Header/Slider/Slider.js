import React from 'react'
import slide1 from './img/slide1.jpg'
import slide2 from './img/slide2.jpg'
import slide3 from './img/slide3.jpg'
import { Zoom } from 'react-slideshow-image';
import './Slider.scss'

const zoomInProperties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: false,
    scale: 4.0,
    arrows: false
}

const slider = [slide1,slide2,slide3]

export default ()=>{
    return(
        <div >
            <section>
                <div className={'slider'}>
                    <Zoom {...zoomInProperties}>
                        {
                            slider.map((e,i)=>{
                                return (
                                    <div key={i} style={{backgroundImage:`url(${e})`,width:'100%',height:'100vh'}}>
                                        <div className={'oppacity'}></div>
                                    </div>
                                )

                            })
                        }
                    </Zoom>
                </div>
            </section>
        </div>
    )
}