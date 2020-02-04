import React,{Component} from "react";
import HeaderContent from './headerContent/HeaderContent'


import './Header.scss'
import logo from "./img/logo.png";
import NavBar from "./Nav_Bar/Nav_Bar";
export default class Header extends Component{
    render() {
        return(
            <div className='header_main' >
                <div className={'absolute'}><div className={'header_container'}>
                    <div className={'logo'} onClick={this.props.scroll.bind(this,0)}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={'nav_fixed'}>
                        <NavBar scroll={this.props.scroll}/>
                    </div>
                </div></div>

             <HeaderContent/>

            </div>
        )
    }
}