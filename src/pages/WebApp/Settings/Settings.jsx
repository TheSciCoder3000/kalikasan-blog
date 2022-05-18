import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { onSignOut as SignOut } from '../../../firebase'
import { updateUser } from '../../../redux/userSlice'
import './Settings.css'

const Settings = ({ userId, userData, profileLoading }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [FirstName, setFirstName] = useState(userData.FirstName)
    const [LastName, setLastName] = useState(userData.LastName)

    const fieldChange = FirstName !== userData.FirstName || LastName !== userData.LastName


    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUser({ userId, FirstName, LastName }))
    }

    const cancelUpdate = () => {
        setFirstName(userData.FirstName)
        setLastName(userData.LastName)
    }

    const onSignOut = async (e) => {
        e.target.disabled = true
        await SignOut()
        history.push('/')
    }

    return (
        <div className='settings-page'>
            <div className="settings-cont">
                <h1>Settings</h1>
                <hr className='header-hr' />
                <div className="user-info">
                    <div className="setting-label-cont">
                        <h3>User Settings</h3>
                    </div>
                    <form onSubmit={onSubmit} className="setting-form">
                        <div className="form-group">
                            <label>First Name:</label>
                            <input type="text"
                                className={fieldChange ? 'field-change' : ''}
                                value={FirstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type="text"
                                className={fieldChange ? 'field-change' : ''} 
                                value={LastName}
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        {fieldChange && (
                            <>
                                <button disabled={profileLoading} className="update-profile" type='submit'>Update</button>
                                <button disabled={profileLoading} onClick={cancelUpdate} className="cancel-update">Cancel</button>
                            </>
                        )}
                    </form>
                </div>
                <div className="other-settings">
                    <div className="setting-label-cont">
                        <h3>Account Options</h3>
                    </div>
                    <div className="setting-actions">
                        <button onClick={onSignOut} className="sign-out-action">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings