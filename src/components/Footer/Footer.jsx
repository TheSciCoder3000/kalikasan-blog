import { NavLink as Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      {/* Website Information */}
      <div className="site-info">
        <div className="site-logo">
          Kalikasan
        </div>
        <div className="site-links">
          <Link to='/' activeClassName='active-link' className='site-link'>Home</Link>
          <Link to='/about' activeClassName='active-link' className='site-link'>About</Link>
          <Link to='/blogs' activeClassName='active-link' className='site-link'>Blogs</Link>
        </div>
      </div>

      {/* Group Members */}
      <div className="members-info">
        <h3 className="members-header">Members</h3>
        <div className="members-list">
          <p>John Juvi De Villa</p>
          <p>Railey Basilio</p>
          <p>Briana Jane</p>
          <p>Ariane Louise Magbanua</p>
          <p>Drew Valerio</p>
          <p>Robin Gabriel Santos</p>
          <p>Emil Hernandez</p>
        </div>
      </div>
    </div>
  )
}

export default Footer