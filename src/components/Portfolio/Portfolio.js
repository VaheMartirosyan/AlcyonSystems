import React from "react";
import './Portfolio.scss'

export default ()=>{

    const services = [
        {
            id: 0,
            icon: 'fa fa-magic',
            title: 'Web Design',
            img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139918/AlcyonSystems/6_x9abtz.jpg'
        },
        {
            id: 1,
            icon: 'fa fa-shopping-cart',
            title: 'Ecommerce',
            img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139909/AlcyonSystems/1_mztied.jpg'
        }, {
            id: 2,
            icon: 'fa fa-check-circle',
            title: 'QA Testing',
            img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139909/AlcyonSystems/2_y65cbi.jpg'
        }, {
            id: 3,
            icon: 'fa fa-desktop',
            title: 'Web Maintenance',
            img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139909/AlcyonSystems/3_kppens.jpg'
        }, {
            id: 4,
            icon: 'fa fa-desktop',
            title: 'Responsive Design',
            img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139917/AlcyonSystems/5_dynsip.jpg'
        }, {
            id: 5,
            icon: 'fa fa-thumbs-up',
            title: 'Social Media',
            img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139918/AlcyonSystems/4_i891hl.jpg'
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