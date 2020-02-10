import React from 'react'
import './Client.scss'
import SimpleSlider from './Slider/Slider'

export default () => {
    return(
        <div className='client'>
            <div className="container">
                <h2>Clients</h2>
            </div>
            <SimpleSlider />
        </div>
    )
}