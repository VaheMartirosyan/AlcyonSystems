import React from 'react'
import Slider01 from "./Slider/Slider";
import './TeamMembers.scss'


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
            <Slider01/>

            </div>
            
        </div>
    )
}