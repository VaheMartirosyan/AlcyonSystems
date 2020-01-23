import React from 'react'
import './Services.scss'
import jpg1 from './photos/pexel.jpg'

export default () => {
    return(
        <div className="services">
            <div className="ourService">
                <img src={jpg1} alt="" />
            </div>
            <div className="backService">
                <div className="offers">
                    <div className="title">
                        <div className="borderTitle">
                            <h2> <span>Our</span></h2>
                            <h2 className="otherService">Services</h2>
                            <div>
                            <p>loremslkvmsdv slskmdlskdv skms jsvdlkm sldkjvs lskjev lskm
                            loremslkvmsdv slskmdlskdv skms jsvdlkm sldkjvs lskjev lskm
                            loremslkvmsdv slskmdlskdv skms jsvdlkm sldkjvs lskjev lskm
                            loremslkvmsdv slskmdlskdv skms jsvdlkm sldkjvs lskjev lskm
                            loremslkvmsdv slskmdlskdv skms jsvdlkm sldkjvs lskjev lskm
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="allServices"></div>
                </div>
            </div>
        </div>
    )
}