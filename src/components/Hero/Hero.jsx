import { useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Hero.css'

const Hero = ({ imgSrc, customVariant, header, customY }) => {
    const NavbarAnimation = useAnimation()
    const [navbarRef, navbarInView] = useInView({ threshold: 0.2 })
  
    useEffect(() => {
      if (navbarInView) NavbarAnimation.start('hidden')
      else NavbarAnimation.start('visible')
    }, [navbarInView])
  
    return (
        <div className='page-hero'>
            {/* Background Image */}
            <div style={{ backgroundPosition: `0 ${customY}`, backgroundImage: `url("${imgSrc}")` }} 
                 ref={navbarRef} 
                 className="module-hero-img" />
            
            {/* Hero Header */}
            <h1 className='hero-header'>{header}</h1>

            {/* Sticky Navbar */}
            <div className="navbar-container">
                <NavBar className="about-nav" 
                        customVariant={customVariant}
                        animation={NavbarAnimation} />
            </div>
        </div>
    )
}

export default Hero