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
                            <h2 className="green">Our Services</h2>
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