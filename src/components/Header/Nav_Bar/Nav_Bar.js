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

                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
        )

    }
}
