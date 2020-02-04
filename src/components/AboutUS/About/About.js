import React from 'react'
import './About.scss'

export default ()=>{
    return(
        <div className={'about_relative'}>
            <h2>About Us</h2>
            <div className={' about_window'}>

                <div className={'about_tophover'}>
                    <p className={'antipadding'}>
                        Being a leading web development company in IT industry,
                        providing excellent customer service and support, we have managed
                        to gain the trust and respect from our clients. Our team is made up of senior
                        and intermediate responsive developers as well. Our clients are always
                        satisfied with our work.
                    </p>
                </div>
                <div className={'about_bottomhover'}>
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