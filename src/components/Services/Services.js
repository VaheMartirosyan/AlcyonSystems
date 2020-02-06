import React,{Component} from "react";
import './Services.scss'
import video from './backgroundVideo/services.mp4';

export default class Services extends Component{
    constructor(props){
        super(props);
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);
        this.hoverOver = this.hoverOver.bind(this)
    }
    handleHover(){
        this.setState({
            isHovered: true
        });
    }
    hoverOver(){
        this.setState({
            isHovered: false
        });
    }

    render() {
        const btnClass = this.state.isHovered ? "hoverMade" : "hoverStart";
        return(
            <div className={'services'}>
                <video muted   loop="loop" playsinline="true" autoPlay='autoplay' className="services_video">
                    <source src={video} type={'video/mp4'} className='header_source'/>
                </video>
                <div className={'li d-flex flex-wrap'}>
                    <div className={'col-lg-6 services_intro'}>
                        <h2>Services</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Alias autem dolore dolores ea enim fugiat incidunt
                            ipsa iure, iusto minus molestias necessitatibus,
                            nulla obcaecati quae ratione similique, veniam voluptatibus. Qui.
                        </p>
                        <p className={btnClass}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eligendi.</p>
                    </div>
                    <div className={'services_list col-lg-6 '}>
                        <div className={'list_item'} onMouseEnter={this.handleHover} onMouseLeave={this.hoverOver}>
                            <h2>Web Development</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}