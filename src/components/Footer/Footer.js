import React from 'react'
import './Footer.scss'
import backimg from './Background/back.gif'


export default () => {
    return(
        <div className="footer" style={{backgroundImage: `url(${backimg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 bg-danger" >
                        <h2>Contact</h2>
                        <div className="d-flex flex-column">
                            <div>
                                <p>New business & partnership</p>
                                <p>+374 99-13-20-32</p>
                                <p>mail@example.ru</p>
                            </div>
                            <div>
                                <p>Visit our office</p>
                                <p>Armenia, Yerevan, Moskovyan 3/2</p>
                            </div>
                            <button className="btn btn-outline-dark">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row contact_footer">
                <div className="col">contact</div>
                <div className="col">image</div>
            </div> */}
        </div>
    )
}