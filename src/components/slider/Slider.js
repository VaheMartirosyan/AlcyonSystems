import React, {Component} from 'react'
import './Slider.scss'


export default class Slider extends Component {
    state = {
        slider: [0, 1, 2, 3, 4, 5, 6, 7],
        slider2: [0, 1, 2, 3, 4, 5, 6, 7]
    }
    render() {
        return(
            <div className="slider">
                {this.state.slider.map(e => {
                    return(
                        <div className="slide">
                            {e}
                        </div>
                    )
                })}
                {this.state.slider2.map(e => {
                    return(
                        <div className="slide2">
                            {e}
                        </div>
                    )
                })}
            </div>
        )
    }
}