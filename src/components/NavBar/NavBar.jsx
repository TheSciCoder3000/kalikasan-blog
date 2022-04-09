import './NavBar.css'
import { NavLink as Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NavBar = ({ animation }) => {
  const navbarVariant = {
    visible: {
      backgroundColor: '#231D1A',
      transition: { duration: 0.25 }
    },
    hidden: {
      backgroundColor: 'rgba(0,0,0,0)',
      transition: { duration: 0.3 }
    }
  }
  return (
    <>
    <motion.div className='navbar'
                animate={animation}
                initial='hidden'
                variants={navbarVariant}
                >
      {/* Logo Container */}
      <div className="site-logo">
        Kalikasan
      </div>

      {/* nav container */}
      <div className="nav-links">
        <Link to='/' className='nav-link' activeClassName='active-nav'>Home</Link>
        <Link to='/about' className='nav-link' activeClassName='active-nav'>About</Link>
        <Link to='/blogs' className='nav-link' activeClassName='active-nav'>Blogs</Link>
      </div>
    </motion.div>
    </>
  )
}

export default NavBar