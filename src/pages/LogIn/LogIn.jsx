import { useRef, useState } from 'react'
import Bkg from './park.jpg'
import './LogIn.css'
import { logUser } from '../../firebase'
import { useHistory } from 'react-router-dom'

const LogIn = () => {
    const [logging, setLogging] = useState(false)
    const history = useHistory()
    const [fieldError, setfieldError] = useState({ type: null, msg: null })
    const emailField = useRef(null)
    const passField = useRef(null)

    const onLogIn = async (e) => {
        e.preventDefault()
        if (logging) return console.log('still logging in')
        setLogging(true)
        let email = emailField.current.value
        let pass = passField.current.value
        
        // field checking
        if (email === '' || !email) setfieldError({ type: 'email', msg: 'Please enter your email' })
        else if (pass === '' || !pass) setfieldError({ type: 'pass', msg: 'please enter your password' })
        else {
            setfieldError({ type: null, msg: null })
            try {
                console.log('logging')
                await logUser(email, pass)
                history.push('/app')
            } catch (error) {
                console.log(error)
            }
        }
        setLogging(false)
    }

    return (
        <div className='log-in' style={{ backgroundImage: `url("${Bkg}")` }}>
            <div className="log-in-modal">
                <h1 className="modal-header">LOGIN</h1>
                <form onSubmit={onLogIn} className="form-group">
                    <div className="field-group">
                        <label className="field-label">Email:</label>
                        <input ref={emailField} type="text" />
                    </div>
                    <div className="field-group">
                        <label className="field-label">Password:</label>
                        <input ref={passField} type="password" />
                    </div>
                    <button disabled={logging} type='submit' className="submit-btn">Login</button>
                </form>
                {fieldError.type && (
                    <p className="error-msg">{fieldError.msg}</p>
                )}
            </div>
        </div>
    )
}

export default LogIn