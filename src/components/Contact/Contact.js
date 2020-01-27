import React, {Component} from 'react'
import './Contact.scss'
import Input from './Input/Input'

export default class Contact extends Component {

    state = {
        formControl: {
            name: {
                label: 'Name',
                type: 'text',
                value: '',
                errMessage: 'name is incorect',
                touched: false, 
                valid: false,
                id: Math.random(),
                validation: {
                    required: true,
                    minLength: 2
                }
            },
            email: {
                label: 'Email',
                type: 'email',
                value: '',
                errMessage: 'email is incorect',
                touched: false, 
                valid: false,
                id: Math.random(),
                validation: {
                    required: true,
                    email: true
                }
            },
            phone: {
                label: 'Phone Number',
                type: 'text',
                value: '',
                errMessage: 'phone number is incorect',
                touched: false, 
                valid: false,
                id: Math.random(),
                validation: {
                    required: true,
                    minLength: 9
                }
            },
        }
    }


    isInvalid(event, control) {
        let formControl = {...this.state.formControl}
        let controls = {...formControl[control]}

        controls.touched = true
        controls.value = event.target.value
        // controls.validation = this.Controler(value, controls)

        formControl[control] = controls

        this.setState({formControl})
    }
    render() {
        return(
            <div className="contact">
                <div className="contactSize">
                    <div className="contactContainer">
                        <div className="getIn">
                        <h2>GET IN</h2>
                        <h2>TOUCH</h2>
                        <div className="social">
                            <div className="media">
                                <p>Email</p> <p>
    info@demolink.org, mail@demolink.org</p>
                            </div>
                            <div className="media">
                                <p>Address</p> <p>4730 Crystal Springs Dr, Los Angeles, CA 90027</p>
                            </div>
                            <div className="media">
                                <p>Phone Number</p>
                                <p>+1 323-913-4688, +1 323-888-4554</p>
                            </div>
                            <div className="mediaIcons">
                                <div className="faFacebook">
                                    <a href="#">
                                        <i class="fa fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="formControler">
                        <form onSubmit={e => e.preventDefault()}>
                        {Object.keys(this.state.formControl).map((control, index) => {
                            const controls = this.state.formControl[control]
                            return(
                                <Input
                                    label={controls.label}
                                    value={controls.value}
                                    type={controls.type}
                                    errMessage={controls.errMessage}
                                    touched={controls.touched}
                                    valid={controls.valid}
                                    shoudValidate={!!controls.validation}
                                    key={controls.id}
                                    onchange={e => this.isInvalid(e, control)}
                                 />
                            )
                        })}
                        <label htmlFor="area">Message</label>
                        <textarea rows="5" id="area" value='' onChange={e => e.target.value}>sdvsd</textarea>
                        <button type="submit">Send Message</button>
                        </form>
                        
                    </div>
                        </div>
                    
                </div>
            </div>
        )
    }
    }
    