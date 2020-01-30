import React from 'react'
import { Slide } from 'react-slideshow-image'

  const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: false
  }

class Slider01 extends React.Component{
    render(){
        return(
            <section>
                <div>
                    <Slide {...properties}>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </Slide>
                </div>
            </section>
        )
    }
}

export default Slider01;