import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import pic1 from '../Memberspic/pic1.jpg'
import pic2 from '../Memberspic/pic2.jpg'
import pic3 from '../Memberspic/pic3.jpg'
import pic4 from '../Memberspic/pic4.jpg'
import pic5 from '../Memberspic/pic5.jpg'
import pic6 from '../Memberspic/pic6.jpg'




export default() => {

    const [slider, setSlider] = useState([
        {
            carouselitem1: [
                
                  { horizontal1: [
                        {
                            img: pic1, name: 'Vahe Martirosyan', job: 'Front-end', icons: ['', '', '']
                        },
                        {
                            img: pic2, name: 'Arman Nazaryan', job: 'Front-end', icons: ['', '', '']
                        },
                        {
                            img: pic3, name: 'Hrach Ashkhatoyan', job: 'Back-end', icons: ['', '', '']
                        }
                    ]},
                  { horizontal2: [
                    {
                        img: pic1, name: 'vahe', job: 'front', icons: ['', '', '']
                    },
                    {
                        img: pic1, name: 'vahe', job: 'front', icons: ['', '', '']
                    },
                    {
                        img: pic1, name: 'vahe', job: 'front', icons: ['', '', '']
                    }
                    ]}
                
            ],
            carouselitem2:  [
                
                { horizontal1: [
                      {
                          img: pic1, name: 'Vahe Martirosyan', job: 'Front-end', icons: ['', '', '']
                      },
                      {
                          img: pic2, name: 'Arman Nazaryan', job: 'Front-end', icons: ['', '', '']
                      },
                      {
                          img: pic3, name: 'Hrach Ashkhatoyan', job: 'Back-end', icons: ['', '', '']
                      }
                  ]},
                { horizontal2: [
                  {
                      img: pic1, name: 'vahe', job: 'front', icons: ['', '', '']
                  },
                  {
                      img: pic1, name: 'vahe', job: 'front', icons: ['', '', '']
                  },
                  {
                      img: pic1, name: 'vahe', job: 'front', icons: ['', '', '']
                  }
                  ]}
              
          ],
        }
        
        
    ])

    return (
        <div className='teamslide'>
        <Carousel controls={false}>
       

        {slider.map(e => {
            return(
                <Carousel.Item>
                    {e[0].map((e)=>{
                        return(
                            <>
                             {e.horizontal1.map(e => {
                                return(
                                    <div className={'horizontalmembers'}>
                                            <div className="imgdv">
                                                <img src={pic1} alt=""/>
                                                <div className="teampopup">
                                                    <h2>Vahe Martirosyan</h2>
                                                    <p>frontend developer</p>
                                                    <div>
                                                    <i class="fa fa-facebook" />
                                                    <i class="fa fa-linkedin" />
                                                    <i class="fa fa-instagram" />
                                                    </div>
                                                </div>
                                                </div>
                                    </div>
                                )
                            })}
                            </>
                           
                        )
                    })}
                </Carousel.Item>
            )
        })}
    </Carousel>
        </div>
       
    )
}

{/* <div className={'horizontalmembers'}>
<div className="imgdv">
<img src={pic1} alt=""/>
<div className="teampopup">
    <h2>Vahe Martirosyan</h2>
    <p>frontend developer</p>
    <div>
    <i class="fa fa-facebook" />
    <i class="fa fa-linkedin" />
    <i class="fa fa-instagram" />
    </div>
</div>
</div>
<div className="imgdv">
<img src={pic2} alt=""/>
<div className="teampopup">
    <h2>Hrach Ashkhatoyan</h2>
    <p>batman</p>
    <div>
           <i />
           <i />
           <i />
    </div>
</div>
</div>
<div className="imgdv">
    
<img src={pic3} alt=""/>
<div className="teampopup">
    <h2>bruce li</h2>
    <p>batman</p>
    <div>
           <i />
           <i />
           <i />
    </div>
</div>
</div>


</div> */}