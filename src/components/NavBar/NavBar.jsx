import './NavBar.css'
import { NavLink as Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimationVariants } from './variants'

const NavBar = ({ animation, className, customVariant }) => {
  return (
    <>
    <motion.div className={`navbar ${className}`}
                animate={animation}
                initial='hidden'
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
        <Link exact to='/blogs' className='nav-link' activeClassName='active-nav'>Blogs</Link>
      </div>
    </motion.div>
    </>
  )
}

export default NavBar