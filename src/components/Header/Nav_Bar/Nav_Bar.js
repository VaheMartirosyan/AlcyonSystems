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
                <div className={'item_menu'}>
                    <div onClick={this.props.scroll.bind(this,0)} className={`item ${this.state.active ? 'active_item' : ''}`} ><span>Home</span></div>
                    <div onClick={this.props.scroll.bind(this,1)} className={`item ${this.state.active ? 'active_item' : ''}`}><span>About</span></div>
                    <div onClick={this.props.scroll.bind(this,2)} className={`item ${this.state.active ? 'active_item' : ''}`}><span>Services</span></div>
                    <div onClick={this.props.scroll.bind(this,3)} className={`item ${this.state.active ? 'active_item' : ''}`}><span>Portfolio</span></div>
                    <div onClick={this.props.scroll.bind(this,5)} className={`item ${this.state.active ? 'active_item' : ''}`}><span>Vacancies</span></div>
                    <div onClick={this.props.scroll.bind(this,4)} className={`item ${this.state.active ? 'active_item' : ''}`}><span>Team</span></div>
                    <div onClick={this.props.scroll.bind(this,6)} className={`item ${this.state.active ? 'active_item' : ''}`}><span>Contact</span></div>
                </div>

            </div>
        )

    }
}
