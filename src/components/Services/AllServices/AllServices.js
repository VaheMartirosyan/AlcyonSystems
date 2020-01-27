import React, {useState} from 'react'
import './AllServices.scss'

export default() => {

    const [state,
        setState] = useState([
         {
            id: 0,
            icon: 'fa fa-magic',
            title: 'Web Design',
            text: 'If you want to attract more customers to your website, you will need solid desig' +
                    'n to reach your goal. Our creative designers will breathe life into your website' +
                    '.'
        }, {
            id: 1,
            icon: 'fa fa-shopping-cart',
            title: 'Ecommerce',
            text: 'Day by day the ecommerce growth reinforces, which means that there is still endless opportunity for brands to start-up an ecommerce website and maximise its earnings..'
        }, {
            id: 2,
            icon: 'fa fa-check-circle',
            title: 'QA Testing',
            text: 'Another vital role of complete website is QA testing. It is meant to increase customer confidence and a company\'s credibility, while also improving work processes and efficiency.'
        }, {
            id: 3,
            icon: 'fa fa-desktop',
            title: 'Web Maintenance',
            text: 'Updating and adding new content to your website will improve its SEO performance and increase your return on investment. We can take care of your website maintenance!'
        }, {
            id: 4,
            icon: 'fa fa-desktop',
            title: 'Responsive Design',
            text: 'Do you know that 63% of web traffic is coming from mobile devices ? It means that if you don\'t have well structured mobile friendly website.'
        }, {
            id: 5,
            icon: 'fa fa-thumbs-up',
            title: 'Social Media',
            text: 'The more specific your strategy is, the more effective the execution will be. Smart social strategies are several times more likely to seal a deal․ Do not hesitate to contact us.'
        }
    ])
    return (
        <div className="valuableServices">
            {state.map(e => {
                return (
                    <div className="development" key={e.id}>
                        <div className="midlevel">
                        <div>
                            <p>
                                <i className={e.icon} /> 
                            </p>
                            <p>{e.title}</p>
                        </div>
                        <p>{e.text}</p>
                        </div>
                       
                    </div>
                )
            })}

        </div>
    )
}