import React from 'react'
// import Slider01 from "./Slider/Slider";
import './TeamMembers.scss'
import pic1 from '../TeamMembers/Memberspic/ashes-sitoula-KdZvvyemkPM-unsplash.jpg'
import pic2 from '../TeamMembers/Memberspic/collins-lesulie-oPyM5T6a_P0-unsplash.jpg'
import pic3 from '../TeamMembers/Memberspic/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash.jpg'
import pic4 from  './Memberspic/kimson-doan-HD8KlyWRYYM-unsplash.jpg'
import pic5 from './Memberspic/travis-blessing-Kremnfgk3n0-unsplash.jpg'
import pic6 from './Memberspic/tyler-nix-PJNIA_gJVIw-unsplash.jpg'

export default ()=>{
    return(
        <div className="teammembers">
            <div className="members">
            <div className="teamcontent">
                <div className={'teamtxt'}>
                    <h2>Team</h2>
                    <h2>Members</h2>
                    <div className='team_qarakusi'></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Beatae consequatur dicta doloribus, fugit inventore ipsa itaque
                        libero maxime minus necessitatibus nulla officia placeat, quaerat
                        , quas quos reprehenderit sapiente similique voluptas!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Beatae consequatur dicta doloribus, fugit inventore ipsa itaque
                        libero maxime minus necessitatibus nulla officia placeat, quaerat
                        , quas quos reprehenderit sapiente similique voluptas!
                        , quas quos reprehenderit sapiente similique voluptas!
                        , quas quos reprehenderit sapiente similique voluptas!
                    </p>
                </div>

            </div>
            <div className="teamslide">
                <div className={'horizontalmembers'}>
                    <img src={pic1} alt=""/>
                    <img src={pic2} alt=""/>
                    <img src={pic3} alt=""/>
                </div>
                <div className={'horizontalmembers'}>
                    <img src={pic4} alt=""/>
                    <img src={pic5} alt=""/>
                    <img src={pic6} alt=""/>
                </div>
            </div>

            </div>
            
        </div>
    )
}