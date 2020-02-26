import React, {useState} from 'react'
import './Footer.scss'
import backimg from './Background/back.gif'
import img from './Background/1.jpg'
import FooterContact from './FooterContact/FooterContact'


export default () => {
    const [contact, setContact] = useState(false)
    return(
        <div className="footer" style={{backgroundImage: `url(${backimg})`}}>
            <div className="containersik">
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
                    <div className="col-lg-4 ">
                    <iframe title='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.0296029859107!2d44.52195796729593!3d40.1841781633163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd59fe0b5b85%3A0xe5733ad4eea7bee6!2sAlcyon%20Systems!5e0!3m2!1sen!2s!4v1581942900605!5m2!1sen!2s"
                    width="650" height="600" frameBorder="0"  allowFullScreen=""></iframe>
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
                    <div className="col-lg-6 two" style={{backgroundImage:`url(${img})`}}>
                        
                        <img src="" alt=""/>
                    </div>
                </div>
            
            </div>
        </div>
    )
}