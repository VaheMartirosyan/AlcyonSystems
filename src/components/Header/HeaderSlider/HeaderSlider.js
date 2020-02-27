import React,{Component} from "react";
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
                    <div className={'slide_content_one'}></div>
                    <div className={'slide_content_two'}></div>
                    <div className={'slide_content_three'}></div>
                </div>
                <div className={'slider_btns'}>
                    <div className={'btns'} onClick={this.one}></div>
                    <div className={'btns'} onClick={this.two}></div>
                    <div className={'btns'} onClick={this.three}></div>
                </div>
            </div>
        )
    }
}