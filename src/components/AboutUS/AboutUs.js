import React from 'react'
import About from './About/About'
import WhyUs from './WhyUs/WhyUs'
import './AboutUs.scss'

export default ()=>{
    return(
        <div className='about_main'>
            <div className="d-flex flex-wrap">
                <div className={'col-lg-6'}>
                    <About/>
                </div>
                <div className={'col-lg-5'} >
                    <WhyUs/>
                </div>
            </div>

        </div>
    )
}