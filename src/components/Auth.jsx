import React, { useEffect, useState, useContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

// Auth context creator
const AuthContext = React.createContext()
export const useAuth = () => useContext(AuthContext)

// Auth Context provider
const AuthProvider = ({ children }) => {
    // context states
    const [currentUser, setcurrentUser] = useState(null)
    const [pending, setPending] = useState(true)

    // Initialize auth state change event listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUserState) => {
            setcurrentUser(currentUserState)
            setPending(false)
        })
        return () => unsubscribe()
    },[])

    return (
            <AuthContext.Provider value={{ currentUser, pending }}>
                {children}
            </AuthContext.Provider>
        )
}

export default AuthProvider