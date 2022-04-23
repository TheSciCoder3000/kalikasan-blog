import { useRef, useState } from 'react'
import Bkg from './park.jpg'
import './LogIn.css'

const LogIn = () => {
    const [fieldError, setfieldError] = useState({ type: null, msg: null })
    const emailField = useRef(null)
    const passField = useRef(null)

    const onLogIn = () => {
        let email = emailField.current.value
        let pass = passField.current.value
        
        // field checking
        if (email === '' || !email) setfieldError({ type: 'email', msg: 'Please enter your email' })
        else if (pass === '' || !pass) setfieldError({ type: 'pass', msg: 'please enter your password' })
        else {
            setfieldError({ type: null, msg: null })
            console.log('login successful')
        }
    }

    return (
        <div className='log-in' style={{ backgroundImage: `url("${Bkg}")` }}>
            <div className="log-in-modal">
                <h1 className="modal-header">LOGIN</h1>
                <div className="form-group">
                    <div className="field-group">
                        <label className="field-label">Email:</label>
                        <input ref={emailField} type="text" />
                    </div>
                    <div className="field-group">
                        <label className="field-label">Password:</label>
                        <input ref={passField} type="password" />
                    </div>
                    <button onClick={onLogIn} className="submit-btn">Login</button>
                </div>
                {fieldError.type && (
                    <p className="error-msg">{fieldError.msg}</p>
                )}
            </div>
        </div>
    )
}

export default LogIn