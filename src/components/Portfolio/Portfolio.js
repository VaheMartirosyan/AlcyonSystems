import React from "react";
import './Portfolio.scss'

export default ()=>{
    return (
        <div className="SecPortfolio">
            <div className="Skills">
                <div className={'OurProj'}>
                    <p className={'OurP'}>OUR</p>
                    <p className={'proj'}>PROJECTS</p>
                </div>
                <div className={'navSkills'}>
                    <ul>
                        <li><a href="">HTML</a></li>
                        <li><a href="">CSS</a></li>
                        <li><a href="">JS</a></li>
                        <li><a href="">BOOTSTRAP</a></li>
                        <li><a href="">BOOTSTRAP</a></li>
                        <li><a href="">BOOTSTRAP</a></li>
                    </ul>
                </div>
            </div>
            <div className="projectImg"></div>
        </div>
    )
}