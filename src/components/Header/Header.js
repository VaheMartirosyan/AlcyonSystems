import React,{Component} from "react";

import Slider from "./Slider/Slider";
import './Header.scss'
import logo from "./Slider/img/logo.png";
export default class Header extends Component{
    render() {
        return(
            <div style={{paddingBottom:'100vh'}}>
                <div>
                    <div className={'logo'}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={'nav_fixed'}>
                        <nav>
                            <ul>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Portfolio</a>
                                </li>
                                <li>
                                    <a href="">Services</a>
                                </li>
                                <li>
                                    <a href="">Contact Us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <Slider/>
            </div>
        )
    }
}