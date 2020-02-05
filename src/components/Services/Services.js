import React from "react";
import './Services.scss'
import video from './backgroundVideo/services.mp4';
import ServicesList from "./ServicesList/ServicesList";

export default ()=>{


    return(
        <div className={'services'}>
            <video muted   loop="loop" playsinline="true" autoPlay='autoplay' className="services_video">
                <source src={video} type={'video/mp4'} className='header_source'/>
            </video>
            <div className={'li d-flex flex-wrap'}>
                <div className={'col-lg-6 services_intro'}>
                    <h2>Services</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Alias autem dolore dolores ea enim fugiat incidunt
                        ipsa iure, iusto minus molestias necessitatibus,
                        nulla obcaecati quae ratione similique, veniam voluptatibus. Qui.
                    </p>

                </div>
                <div className={'services_list col-lg-6 '}>
                    <ServicesList/>
                </div>
            </div>
        </div>
    )
}