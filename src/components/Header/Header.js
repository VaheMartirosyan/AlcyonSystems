import React,{Component} from "react";

import Slider from "./Slider/Slider";
import './Header.scss'
import logo from "./Slider/img/logo.png";
import NavBar from "./Nav_Bar/Nav_Bar";
export default class Header extends Component{
    render() {
        return(
            <div >
                <div className={'absolute'}><div className={'header_container'}>
                    <div className={'logo'} onClick={this.props.scroll.bind(this,0)}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={'nav_fixed'}>
                        <NavBar scroll={this.props.scroll}/>
                    </div>
                </div></div>

                <Slider/>

            </div>
        )
    }
}