import React from 'react'
import './Services.scss'
import AllServices from './AllServices/AllServices'



export default() => {
    return (
        <div className="services">
            <div className="serviceSize">
                <div className="serviceLine">
                    <div className="firstService">
                        <div className="serviceFont">
                            <h2 className="green">Our</h2>
                            <h2 className="gradient">Services</h2>
                        </div>
                        <div className="serviceBox">
                            <div className="servIcon">
                                <p><i className="fa fa-code"></i></p>
                                <p>Web Development</p>
                            </div>
                            <p className="content">It's difficult to imagine a successful business without a good website, which will best describe your company's what, how, why and who. We are Alcyon team and if you want a web based on unique solutions, you are in the right place.</p>
                        </div>
                    </div>
                    <div className="allservices">
                        <AllServices />
                    </div>
                </div>
            </div>
        </div>
    )
}