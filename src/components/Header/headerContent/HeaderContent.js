import React from 'react'
import video from './video/videoTop.mp4'
import './HeaderContent.scss'

export default ()=>{
    return(
        <div className='video_div'>
            <video muted loop="loop" playsInline="true"   autoPlay='autoplay'className="active_pause">
                <source src={video} type={'video/mp4'}/>
            </video>
            <h2><span>Alcyon Systems</span> – is a communication group, which provides clients with business results in a modern digital context.</h2>
        </div>
    )
}