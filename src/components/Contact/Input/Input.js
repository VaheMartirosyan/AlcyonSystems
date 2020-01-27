import React from 'react'
import './Input.scss'

function isValid(props) {
    return !props.valid && props.touched && props.shoudValidate
}

export default (props) => {

    const sty = ['inputs']
    const htmlFor = Math.random()
    if(isValid(props)) {
        sty.push('invalid')
    }

    return(
        <div className={sty.join(' ')} key={props.id}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                value={props.value}
                type={props.type}
                id={htmlFor}
                className="formInput"
                onChange={props.onchange}
             />
             {isValid(props) ? <span>{props.errMessage}</span> : null}
        </div>
    )
}