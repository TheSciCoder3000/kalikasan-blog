import './NavBar.css'
import { NavLink as Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimationVariants } from './variants'
import { onSignOut } from '../../firebase'

const NavBar = ({ animation, className, customVariant, initial, currentUser }) => {
  // console.log('navbar', auth)
  return (
    <>
      <motion.div className={`navbar ${className}`}
                  animate={animation}
                  initial={initial ? initial : 'hidden'}
                  variants={customVariant ? customVariant : AnimationVariants.Navbar}
                  >
        {/* Logo Container */}
        <div className="site-logo">
          Kalikasan
        </div>

        {/* nav container */}
        <div className="nav-links">
          <Link exact to='/' className='nav-link' activeClassName='active-nav'>Home</Link>
          <Link to='/about' className='nav-link' activeClassName='active-nav'>About</Link>
          {!currentUser ? 
            <>
              <Link exact to='/signup' className='nav-link' activeClassName='active-nav'>Sign Up</Link>
              <Link exact to='/login' className='nav-link' activeClassName='active-nav'>Login</Link>
            </>
            :
            <a onClick={onSignOut} className="nav-link">Sign Out</a>
          }
          </div>
      </motion.div>
    </>
  )
}

export default NavBar