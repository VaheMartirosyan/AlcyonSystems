import React from 'react'
import './WhyUs.scss'

export default ()=>{
    return(
        <div className={'why_relative'}>
            <h2>Why Choose Us</h2>
            <div className={' why_window'}>

                <div className={'why_tophover'}>
                    <p className={'antipadding'}>
                        Being a leading web development company in IT industry,
                        providing excellent customer service and support, we have managed
                        to gain the trust and respect from our clients. Our team is made up of senior
                        and intermediate responsive developers as well. Our clients are always
                        satisfied with our work.
                    </p>
                </div>
                <div className={'why_bottomhover'}>
                    <p>
                        Alcyon team offers you high quality IT services including web development,
                        web design, ecommerce, QA testing, web maintenance, responsive design and social media.
                        Do you want a user friendly, agile and responsive website? Start it with our team.
                    </p>
                </div>
            </div>
        </div>
    )
}