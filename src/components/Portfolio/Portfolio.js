import React from "react";
import pic1 from './PortfolioPics/1.jpg';
import pic2 from './PortfolioPics/2.jpg';
import pic3 from './PortfolioPics/3.jpg';
import pic4 from './PortfolioPics/4.jpg';
import pic5 from './PortfolioPics/5.jpg';
import pic6 from './PortfolioPics/6.jpg';
import './Portfolio.scss'

export default ()=>{

    const services = [
        {
            id: 0,
            icon: 'fa fa-magic',
            title: 'Web Design',
            img:pic1
        },
        {
            id: 1,
            icon: 'fa fa-shopping-cart',
            title: 'Ecommerce',
            img:pic2
        }, {
            id: 2,
            icon: 'fa fa-check-circle',
            title: 'QA Testing',
            img:pic3
        }, {
            id: 3,
            icon: 'fa fa-desktop',
            title: 'Web Maintenance',
            img:pic4
        }, {
            id: 4,
            icon: 'fa fa-desktop',
            title: 'Responsive Design',
            img:pic5
        }, {
            id: 5,
            icon: 'fa fa-thumbs-up',
            title: 'Social Media',
            img:pic6
        },
       
    ]



    return(
        <div className={'d-flex flex-wrap portfolio'}>
            {services.map((e,i)=>{
                return(
                    <div key={e.id} className={'portfolio_elems col-lg-3'}>
                        <div className={'portfolio_title'}>
                            <h2>{e.title}</h2>
                            <i className={e.icon}></i>
                        </div>
                        <div className={`portfolio_context cont${i}`}>
                            <div className='portfolio_img'>
                                <img src={e.img} alt=""/>
                            </div>
                            <a href="/">Click To Watch</a>
                        </div>
                    </div>
                )
            })}

        </div>

    )
}