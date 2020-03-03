import React, {Component} from 'react'
import './FooterContact.scss'
import FooterInput from './FooterInput/FooterInput'



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
                placeholder: 'Your Name',
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
                placeholder: 'E-mail',
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
                placeholder: 'Your Phone',
                touched: false, 
                valid: false,
                id: Math.random(),
                validation: {
                    required: true,
                    number: true
                }
            },
        },
        // areaText: '',
    }


    changeArea = (e) => {   
        this.setState({areaText: e.target.value})
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

        if(validation.linkreg) {
            isValid = value.match(/(([a-z]+:\/\/)?(([a-z0-9-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-.~]+)*(\/([a-z0-9_\-.]*)(\?[a-z0-9+_\-.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi) && isValid
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

    // sendMessage = (e) => {
    //
    //     Object.keys(this.state.formControl).map((e) => {
    //         const a = this.state.formControl[e]
    //          this.state.emptymass.push(a.value, this.state.areaText)
    //
    //     })
    // }
    render() {
        return(
            <div className="contacts">
                <div className="contactSize">
                    <div className="contactContainer">
                    
                    <div className="formControlers">
                        <div className='us'>
                            <h2>Contact Us</h2>
                        </div> 
                        
                        <form onSubmit={e => e.preventDefault()}>
                        {Object.keys(this.state.formControl).map((control, index) => {
                            const controls = this.state.formControl[control]
                            return(
                                <FooterInput
                                    label={controls.label}
                                    value={controls.value}
                                    type={controls.type}
                                    errMessage={controls.errMessage}
                                    placeholder={controls.placeholder}
                                    touched={controls.touched}
                                    valid={controls.valid}
                                    shoudValidate={!!controls.validation}
                                    key={controls.id}
                                    onchange={e => this.isInvalid(e, control)}
                                 />
                            )
                        })}
                       
                        <textarea rows="5" value={this.state.areaText} onChange={this.changeArea} placeholder='Your Message'></textarea>
                        
                        <button type="submit" disabled={!this.state.isFormValid} className={this.state.disabled ? 'disabled' : null}>Send Message</button>
                        </form>
                        
                    </div>
                        </div>
                    
                </div>
            </div>
        )
    }
    }
    