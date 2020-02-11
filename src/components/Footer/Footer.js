import React, {useState} from 'react'
import './Footer.scss'
import backimg from './Background/back.gif'
import FooterContact from './FooterContact/FooterContact'


export default () => {
    const [contact, setContact] = useState(false)
    return(
        <div className="footer" style={{backgroundImage: `url(${backimg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 footer_content" >
                        <h2>Contact</h2>
                        <div className="d-flex flex-column">
                            <div className='address_contact'>
                                <p>New business & partnership</p>
                                <p>+374 99-13-20-32</p>
                                <p className='footer_p_border'>mail@example.ru</p>
                            </div>
                            <div className='address_contact2'>
                                <p>Visit our office</p>
                                <p className='footer_p_border'>Armenia, Yerevan, Moskovyan 3/2</p>
                            </div>
                            <button className="contactOpener" onClick={() => setContact(true)}>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`contact_footer ${contact ? 'contactFooter' : null}`}>
                        <div id="mdiv2" onClick={() => setContact(false)}>
                            <div className="mdiv2">
                                <div className="md2"></div>
                            </div>
                        </div>
                <div className="footer_container d-flex">
                    <div className="col-lg-6">
                        <FooterContact />
                    </div>
                    <div className="col-lg-6">
                        image
                        <img src="" alt=""/>
                    </div>
                </div>
            
            </div>
        </div>
    )
}