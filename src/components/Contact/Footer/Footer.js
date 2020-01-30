import React from 'react';
import './Footer.scss'

export default ()=>{
    return(
        <div className={'footer'}>
             <div className="getIn">
                       
                        <div className="social">
                        <div className={'mediatext'}>
                        <div className="media">
                                <p>Email </p> 
                                <p> info@demolink.org, mail@demolink.org</p>
                            </div>
                            <div className="media">
                                <p>Address </p> <p> 4730 Crystal Springs Dr, Los Angeles, CA 90027</p>
                            </div>
                            <div className="media">
                                <p>Phone Number  </p>
                                <p> +1 323-913-4688, +1 323-888-4554</p>
                            </div></div> 
                            <div className="mediaIcons">
                                <div className="faFacebook">
                                    <a href="#">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}