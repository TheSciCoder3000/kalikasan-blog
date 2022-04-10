import NavBar from '../../components/NavBar/NavBar'
import SunsetTree from './sunsetTree.jpg'
import './About.css'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AboutVariants } from './AboutVariants'
import Hero from '../../components/Hero/Hero'

const About = () => {
  const NavbarAnimation = useAnimation()
  const [navbarRef, navbarInView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (navbarInView) NavbarAnimation.start('hidden')
    else NavbarAnimation.start('visible')
  }, [navbarInView])

  // Change Page Title
  useEffect(() => {
    document.title = 'Kalikasan - About'
  }, [])

  return (
    <div className="about-page">
      {/* Hero Section */}
      <Hero imgSrc={SunsetTree} 
            customVariant={AboutVariants.Navbar} 
            header="About"
            customY="-250px" />

      {/* About Content */}
      <div className="about-content">
        
      </div>
    </div>
  )
}

export default About