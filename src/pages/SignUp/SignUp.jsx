import { useRef, useState } from 'react'
import Bkg from './waterfall.jpg'
import './SignUp.css'

const SignUp = () => {
    const [fieldError, setfieldError] = useState({ type: null, msg: null })
    const userField = useRef(null)
    const emailField = useRef(null)
    const passField = useRef(null)
    const confirmField = useRef(null)

    const onSignUp = () => {
        let username = userField.current.value
        let email = emailField.current.value
        let pass = passField.current.value
        let confirm = confirmField.current.value
        
        // field checking
        if (username === '' || !username) setfieldError({ type: 'username', msg: 'Please enter a Username' })
        else if (email === '' || !email) setfieldError({ type: 'email', msg: 'Please enter your email' })
        else if (pass === '' || !pass) setfieldError({ type: 'pass', msg: 'Please enter your password' })
        else if (pass !== confirm) setfieldError({ type: 'confirm', msg: 'Your confirm password does not match with your password' })
        else {
            setfieldError({ type: null, msg: null })
            console.log('login successful')
        }
    }

    return (
        <div className='sign-up' style={{ backgroundImage: `url("${Bkg}")` }}>
            <div className="sign-up-modal">
                <h1 className="modal-header">SIGN UP</h1>
                <div className="form-group">
                    <div className="field-group">
                        <label className="field-label">Username:</label>
                        <input ref={userField} type="text" />
                    </div>
                    <div className="field-group">
                        <label className="field-label">Email:</label>
                        <input ref={emailField} type="text" />
                    </div>
                    <div className="field-group">
                        <label className="field-label">Password:</label>
                        <input ref={passField} type="password" />
                    </div>
                    <div className="field-group">
                        <label className="field-label">Confirm Password:</label>
                        <input ref={confirmField} type="password" />
                    </div>
                    <button onClick={onSignUp} className="submit-btn">Sign Up</button>
                </div>
                {fieldError.type && (
                    <p className="error-msg">{fieldError.msg}</p>
                )}
            </div>
        </div>
    )
}

export default SignUp