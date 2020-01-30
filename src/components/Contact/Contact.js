import React, {Component} from 'react'
import './Contact.scss'
import Input from './Input/Input'
import Footer from './Footer/Footer'



function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


export default class Contact extends Component {

    state = {
        isFormValid: false,
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
                    minLength: 2,
                    simbol: true
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
                    number: true
                }
            },
        }
    }


    Controler(value, validation) {
        if(!validation) {
            return true
        }
        let isValid = true

        if(validation.required) {
            isValid = value.trim().length !== 0 && isValid
        }

        if(validation.number) {
            isValid = value.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{2}[-\s.]?[0-9]{4,6}$/) && isValid
        }

        if(validation.simbol) {
            isValid = value.match(/^[a-z ,.'-]+$/i) && isValid
        }

        if(validation.email) {
            isValid = validateEmail(value) && isValid
        }

        if(validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }


        return isValid
    }

    isInvalid(event, control) {
        let formControl = {...this.state.formControl}
        let controls = {...formControl[control]}

        


        controls.touched = true
        controls.value = event.target.value
        controls.valid = this.Controler(controls.value, controls.validation)
        formControl[control] = controls

        let isFormValid = true
        Object.keys(this.state.formControl).map(name => {
            return isFormValid = formControl[name].valid && isFormValid
        })

        this.setState({formControl, isFormValid})
    }
    render() {
        return(
            <div className="contact">
                <div className="contactSize">
                    <div className="contactContainer">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d453.1057240649606!2d44.52245588050478!3d40.18414654148106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1580290594126!5m2!1sru!2s"
                        style={{width:'50%',border:'none'}} ></iframe>
                    <div className="formControler">
                        <div className='us'>
                            <h2>Contact Us</h2>
                        </div> 
                        
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
                        <textarea rows="5" ></textarea>
                        
                        <button type="submit" disabled={!this.state.isFormValid} onClick={() => {console.log('click')}} className={this.state.disabled ? 'disabled' : null}>Send Message</button>
                        </form>
                        
                    </div>
                        </div>
                    
                </div>
                <Footer/>
            </div>
        )
    }
    }
    