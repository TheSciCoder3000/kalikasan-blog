import React from 'react'
import { Route } from 'react-router-dom'

const ProtectedAdminRoute = ({ isAdmin, children, ...rest }) => {
  return isAdmin ? 
    <Route {...rest}>
        {children}
    </Route>
    :
    <>This route is restricted to Admins only</>
}

export default ProtectedAdminRoute