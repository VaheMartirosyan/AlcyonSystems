import React from 'react'
import video from './video/videoTop.mp4'
import './HeaderContent.scss'
import './MediaHeaderContent.scss'

export default ()=>{
    return(
        <div className='video_div'>
            <video muted loop="loop"    autoPlay='autoplay' className="active_pause">
                <source src={video} type={'video/mp4'} className='header_source'/>
            </video>
            <h3 className='headH2'>Alcyon Systems</h3>
            <h2 className='headh2_1'>Is a communication group, which provides clients with business </h2>
            <h2 className='headh2_2'>results in a modern digital context.</h2>
        </div>
    )
}