import React, {useState} from 'react'
import './AllServices.scss'

export default() => {

    const [state,
        setState] = useState([
         {
            id: 4,
            icon: 'fa fa-desktop',
            title: 'Responsive Design',
            text: 'Do you know that 63% of web traffic is coming from mobile devices ? It means that if you don`t have well '
            +'structured mobile friendly website, then you have a big chance to lose real customers.'
            +' With our qualified developers team you`ll get fast, professional and mobile friendly'
            +' website which your customers will adore.'
        }, {
            id: 1,
            icon: 'fa fa-shopping-cart',
            title: 'Ecommerce',
            text: 'Day by day the ecommerce growth reinforces, which means that there is still endless opportunity for brands to start-up an ecommerce website and maximise its earnings.'
            +' With our ecommerce service you can have the key to the successful online sales.'
        }, {
            id: 2,
            icon: 'fa fa-check-circle',
            title: 'QA Testing',
            text: 'Another vital role of complete website is QA testing. It is meant to increase '
            +'customer confidence and a company`s credibility, while also improving work processes and efficiency. ' 
            +'After the testing you can be ensured that it works without any errors and can go live.'
        }, {
            id: 3,
            icon: 'fa fa-desktop',
            title: 'Web Maintenance',
            text: 'Updating and adding new content to your website will improve its SEO performance '
            +'and increase your return on investment. We can take care of your website maintenance, '
            +'protection and even content updates!'
            +'If you don’t have time or don’t know how to maintain your website, we are here for you.'
        }, {
            id: 0,
            icon: 'fa fa-magic',
            title: 'Web Design',
            text: 'If you want to attract more customers to your website, you will need solid design to reach your goal. '
            +'Our creative designers will breathe life into your website.'
        }, {
            id: 5,
            icon: 'fa fa-thumbs-up',
            title: 'Social Media',
            text: 'The more specific your strategy is, the more effective the execution will be. Smart social strategies are several times more likely to seal a deal․ Do not hesitate to contact us.'
        },
        {
            id: 6,
            icon: 'fa fa-code',
            title: 'Web Development',
            text: 'It`s difficult to imagine a successful business without a good website, which will best describe your company`s what, how, why and who. We are Alcyon team and if you want a web based on unique solutions, you are in the right place.'
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

