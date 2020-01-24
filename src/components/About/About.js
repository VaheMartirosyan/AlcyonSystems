import React from "react";
import pic from './img/pic2.jpg'
import { Slide } from 'react-slideshow-image';

import './About.scss'


const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: false,

}
export default ()=>{
    return(
        <div className={'about'}>
            <div className={'about_container'}>
                <div className={'about_text'}>
                    <div>
                        <div className={'about_title'}>
                            <div className={'text_container'}>
                                <h2>Why Choose </h2>
                                <h2>Us</h2>
                            </div>
                            <div className={'qarakusi'}></div>
                        </div>
                    </div>
                    <div className={'about_skills'}>
                        <p>
                            Being a leading web development company in IT industry, providing excellent customer service and support,
                            we have managed to gain the trust and respect from our clients. Our team is made up of senior and intermediate
                            responsive developers as well. Our clients are always satisfied with our work.
                            Alcyon team offers you high quality IT services including web development, web design, ecommerce, QA testing, web maintenance,
                            responsive design and social media. Do you want a user friendly, agile and responsive website? Start it with our team.
                        </p>
                    </div>
                </div>
                <div className={'about_image'}>
                    <img src={pic} alt=""/>

                </div>
            </div>
        </div>
    )
}