import React,{Component} from "react";

import Slider from "./Slider/Slider";
import './Header.scss'
import logo from "./Slider/img/logo.png";
import Nav_Bar from "./Nav_Bar/Nav_Bar";
export default class Header extends Component{
    render() {
        return(
            <div>
                <div>
                    <div className={'logo'}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={'nav_fixed'}>

                        <Nav_Bar/>
                    </div>
                </div>
                <Slider/>
            </div>
        )
    }
}