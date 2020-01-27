import React from 'react'
import './Input.scss'

function isValid({valid, touched, shoudValidate}) {
    return !valid && touched && shoudValidate
}

export default ({label, value, type, onchange, errMessage, id}, props) => {

    const sty = ['inputs']
    const htmlFor = Math.random()
    if(isValid(props)) {
        sty.push('invalid')
    }

    return(
        <div className={sty.join(' ')} key={id}>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                value={value}
                type={type}
                id={htmlFor}
                className="formInput"
                onChange={onchange}
             />
             {isValid(props) ? <span>{errMessage}</span> : null}
        </div>
    )
}