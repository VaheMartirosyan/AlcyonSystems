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
                                        <div className={'oppacity'}>
                                            <div>
                                                <h2>WEB DEVELOPMENT</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Atque culpa cumque deserunt distinctio earum ex exercitationem
                                                    laborum, magni modi molestiae, Lorem ipsum dolor.
                                                    officia possimus, provident saepe sapiente temporibus totam voluptas? Maxime, quas?</p>

                                            </div>
                                        </div>
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