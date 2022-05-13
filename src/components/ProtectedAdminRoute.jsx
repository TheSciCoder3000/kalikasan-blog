import React from 'react'
import { Route } from 'react-router-dom'

const ProtectedAdminRoute = ({ isAdmin, children, ...rest }) => {
  return isAdmin ? 
    <Route {...rest}>
        {children}
    </Route>
    :
    <div className='admin-restricted-route'>This route is restricted to Admins only</div>
}

export default ProtectedAdminRoute