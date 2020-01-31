import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import pic1 from '../Memberspic/pic1.jpg'
import pic2 from '../Memberspic/pic2.jpg'
import pic3 from '../Memberspic/pic3.jpg'
import pic4 from '../Memberspic/pic4.jpg'
import pic5 from '../Memberspic/pic5.jpg'
import pic6 from '../Memberspic/pic6.jpg'




export default() => {

    return (
        <div className='teamslide'>
        <Carousel controls={false}>
        <Carousel.Item>
             <div className={'horizontalmembers'}>
                <img src={pic1} alt=""/>
                <img src={pic2} alt=""/>
                <img src={pic3} alt=""/>
            </div>
            <div className={'horizontalmembers'}>
                <img src={pic4} alt=""/>
                <img src={pic5} alt=""/>
                <img src={pic6} alt=""/>
            </div>

        </Carousel.Item>
        <Carousel.Item>
            <div className={'horizontalmembers'}>
                <img src={pic1} alt=""/>
                <img src={pic2} alt=""/>
                <img src={pic3} alt=""/>
            </div>
            <div className={'horizontalmembers'}>
                <img src={pic4} alt=""/>
                <img src={pic5} alt=""/>
                <img src={pic6} alt=""/>
            </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className={'horizontalmembers'}>
                <img src={pic1} alt=""/>
                <img src={pic2} alt=""/>
                <img src={pic3} alt=""/>
            </div>
            <div className={'horizontalmembers'}>
                <img src={pic4} alt=""/>
                <img src={pic5} alt=""/>
                <img src={pic6} alt=""/>
            </div>

        </Carousel.Item>
    </Carousel>
        </div>
       
    )
}