import { useRef, useState } from 'react'
import { createUser, getDb } from '../../firebase'
import Bkg from './waterfall.jpg'
import './SignUp.css'
import { useHistory, useLocation } from 'react-router-dom'

const SignUp = () => {
    const history = useHistory()
    const { search } = useLocation()
    const adminType = new URLSearchParams(search).get("type") === 'admin'
    const [signUpProgress, setSignUpProgress] = useState(false)

    const [fieldError, setfieldError] = useState({ type: null, msg: null })
    const firstName = useRef(null)
    const lastName = useRef(null)
    const emailField = useRef(null)
    const passField = useRef(null)
    const confirmField = useRef(null)
    const adminCode = useRef(null)

    const onSignUp = async e => {
        if (signUpProgress) return console.log('currently signing up')
        setSignUpProgress(true)
        e.preventDefault()
        let First = firstName.current.value
        let Last = lastName.current.value
        let email = emailField.current.value
        let pass = passField.current.value
        let confirm = confirmField.current.value
        let userAdminCode = adminCode.current?.value
        
        // field checking
        if (First === '' || !First) setfieldError({ type: 'username', msg: 'Please enter your First Name' })
        else if (Last === '' || !Last) setfieldError({ type: 'username', msg: 'Please enter your Last Name' })
        else if (email === '' || !email) setfieldError({ type: 'email', msg: 'Please enter your email' })
        else if (pass === '' || !pass) setfieldError({ type: 'pass', msg: 'Please enter your password' })
        else if (pass !== confirm) setfieldError({ type: 'confirm', msg: 'Your confirm password does not match with your password' })
        else {
            setfieldError({ type: null, msg: null })
            try {
                let admin = adminType ? await getDb('settings', 'config').then(snapshot => snapshot.data().adminKey === userAdminCode) : false
                const user = await createUser(email, pass, First, Last, admin)
                console.log(user)
                history.push('/app')
            } catch (error) {
                console.log(error)
            }
        }
        setSignUpProgress(false)
    }

    return (
        <div className='sign-up' style={{ backgroundImage: `url("${Bkg}")` }}>
            <div className="sign-up-modal">
                <h1 className="modal-header">SIGN UP</h1>
                <form onSubmit={onSignUp} className="form-group">
                    <div className="field-group">
                        <label className="field-label">First Name:</label>
                        <input ref={firstName} type="text" />
                    </div>
                    <div className="field-group">
                        <label className="field-label">Last Name:</label>
                        <input ref={lastName} type="text" />
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
                    {adminType && (
                        <div className="field-group">
                            <label className="field-label">admin code:</label>
                            <input ref={adminCode} type="password" />
                        </div>
                    )}
                    <button disabled={signUpProgress} type='submit' className="submit-btn">Sign Up</button>
                </form>
                {fieldError.type && (
                    <p className="error-msg">{fieldError.msg}</p>
                )}
            </div>
        </div>
    )
}

export default SignUp