import React from 'react'
import './PendingStyles.css'

const NoConnection = () => {
  return (
    <div className='pending-page no-connection'>
        <h1>No Connection</h1>
        <p>Please check your internet connection or refresh the site again</p>
    </div>
  )
}

export default NoConnection