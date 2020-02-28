import React,{Component} from "react";
import pic from './headerSliderimages/1.jpg'
import pic2 from './headerSliderimages/2.jpg'
import pic3 from './headerSliderimages/3.jpg'
import './HeaderSlider.scss';

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
                    <div className={'slide_content_one'} style={{backgroundImage:`url(${pic})`}}>
                        <div className={'text_head_slide'}>
                            <div className={` ${this.state.a ? 'text_for_slider_anim' : 'text_for_slider'}`}>
                                <h2>Web Development</h2>
                                <p>Since our establishment, we have been delivering high quality and sustainable software solutions for corporate purposes of business</p>
                            </div>
                        </div>
                    </div>
                    <div className={'slide_content_two'} style={{backgroundImage:`url(${pic2})`}}>
                        <div className={'text_head_slide'}>
                            <div className={` ${this.state.b ? 'text_for_slider_anim' : 'text_for_slider'}`}>
                                <h2>Experienced Team</h2>
                                <p>We are a team of qualified software developers, aimned at creating unique and powerful tools for your business & everyday life</p>
                            </div>
                        </div>
                    </div>
                    <div className={'slide_content_three'} style={{backgroundImage:`url(${pic3})`}}>
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