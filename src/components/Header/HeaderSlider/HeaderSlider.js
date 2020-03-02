import React,{Component} from "react";
import './HeaderSlider.scss';
import './MediaHeaderSlider.scss';


export default class HeaderSlider extends Component{
    state = {
        a:true,
        b:false,
        c:false
    }

    one = () => {
        this.setState({
            a:true,
            b:false,
            c:false
        })
    };
    two = () =>{
        this.setState({
            a:false,
            b:true,
            c:false
        })
    };
    three = () =>{
        this.setState({
            a:false,
            b:false,
            c:true
        })
    }

    render() {
        return(
            <div className={'header_slider'}>
                <div className={`${this.state.a ? 'slider_content' : '' } ${this.state.b ? 'slider_content2' : ''} ${this.state.c ? 'slider_content3' : ''}`}>
                    <div className={'slide_content_one'} style={{backgroundImage:`url(https://res.cloudinary.com/alcyonsystems/image/upload/v1583139883/AlcyonSystems/1_jeytbu.jpg)`}}>
                        <div className={'text_head_slide'}>
                            <div className={` ${this.state.a ? 'text_for_slider_anim' : 'text_for_slider'}`}>
                                <h2>Web Development</h2>
                                <p>Since our establishment, we have been delivering high quality and sustainable software solutions for corporate purposes of business</p>
                            </div>
                        </div>
                    </div>
                    <div className={'slide_content_two'} style={{backgroundImage:`url(https://res.cloudinary.com/alcyonsystems/image/upload/v1583139883/AlcyonSystems/2_fi4l6o.jpg)`}}>
                        <div className={'text_head_slide'}>
                            <div className={` ${this.state.b ? 'text_for_slider_anim' : 'text_for_slider'}`}>
                                <h2>Experienced Team</h2>
                                <p>We are a team of qualified software developers, aimned at creating unique and powerful tools for your business & everyday life</p>
                            </div>
                        </div>
                    </div>
                    <div className={'slide_content_three'} style={{backgroundImage:`url(https://res.cloudinary.com/alcyonsystems/image/upload/v1583139883/AlcyonSystems/3_tgfmgo.jpg)`}}>
                        <div className={'text_head_slide'}>
                            <div className={` ${this.state.c ? 'text_for_slider_anim' : 'text_for_slider'}`}>
                                <h2>Award-Winning Software</h2>
                                <p>The software solutions developed by our company have been numerously awarded for usability and innovative features</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'slider_btns'}>
                    <div className={` ${this.state.a ? 'active_slide_btn' : 'btns'}`} onClick={this.one}></div>
                    <div className={` ${this.state.b ? 'active_slide_btn' : 'btns'}`} onClick={this.two}></div>
                    <div className={` ${this.state.c ? 'active_slide_btn' : 'btns'}`} onClick={this.three}></div>
                </div>
            </div>
        )
    }
}