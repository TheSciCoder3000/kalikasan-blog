import React from 'react'
import { Menu } from '../iconComp'
import './TopBar.css'

const TopBar = ({ name, email, toggleMenuBar }) => {
  return (
    <div className='top-bar'>
        <div className="menu-bar-cont" onClick={() => toggleMenuBar(true)}><Menu /></div>
        <h2 className="site-logo">Kalikasan</h2>
        <div className="profile-cont">
            <div className="profile-img-cont">

            </div>
            <div className="profile-details">
                <p className='user-name'>{name}</p>
                <p className='user-email'>{email}</p>
            </div>
        </div>
    </div>
  )
}

export default TopBar