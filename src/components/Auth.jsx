import React, { useEffect, useState, useContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = React.createContext()
export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState(null)
    const [pending, setPending] = useState(true)
    useEffect(() => {
        onAuthStateChanged(auth, (currentUserState) => {
            setcurrentUser(currentUserState)
            setPending(false)
        })
    },[])

    return (
            <AuthContext.Provider value={{ currentUser, pending }}>
                {children}
            </AuthContext.Provider>
        )
}

export default AuthProvider