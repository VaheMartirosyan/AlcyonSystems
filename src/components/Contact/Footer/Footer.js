import React from 'react';
import './Footer.scss'

export default ()=>{
    return(
        <div className={'footer'}>
             <div className="getIn">
                       
                        <div className="social">
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
                        <div className={'mediatext'}>
                        <div className="media">
                                <p>Email </p> 
                                <p> info@alcyonsystems.am</p>
                            </div>
                            <div className="media">
                                <p>Address </p> <p> Armenia, Yerevan, Moscow Street 3/2</p>
                            </div>
                            <div className="media">
                                <p>Phone Number  </p>
                                <p> +374 99 132 032</p>
                            </div></div> 

                        </div>
                    </div>
            <p className={'LLC'}>© 2020 <span>Alcyon Systems LLC.</span>Alcyon Systems LLC. All Rights Reserved</p>
        </div>
    )
}