import React,{Component} from "react";
import './Nav_Bar.scss'

export default class Nav_Bar extends Component{
    state={
        active:false
    }
    menuHandler =()=>{
        this.setState({
            active:!this.state.active
        })
    }
    render() {

        return(
            <div className="containers">
                <ul className={`menu ${this.state.active ? 'active_menu' : ''}`} onClick={this.menuHandler}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul className={`links ${this.state.active ? 'active_links' : ''}`}>

                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        )

    }
}
