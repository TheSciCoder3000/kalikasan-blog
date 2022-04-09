import './Home.css'
import Forest from './trees-edited.jpg'
import Pope from './pope.jpg'
import NavBar from '../../components/NavBar/NavBar'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Home = () => {
  const CardAnimation = useAnimation()
  const [ cardRef, cardInView ] = useInView({ threshold: 0.1 })
  
  const NavbarAnimation = useAnimation()
  const [ navbarRef, navbarInView ] = useInView({ threshold: 0.1 })
  

  useEffect(() => {
    if (cardInView) CardAnimation.start('visible')
    else CardAnimation.start('hidden')
  }, [cardInView])
  
  useEffect(() => {
    if (!navbarInView) NavbarAnimation.start('visible')
    else NavbarAnimation.start('hidden')
  }, [navbarInView])

  const cardVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25 }
    },
    hidden: {
      opacity: 0,
      y: '5rem',
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className='home-page'>
      {/* Sticky Navbar */}
      <NavBar animation={NavbarAnimation} />
      
      {/* Hero Section */}
      <div className="hero-section">
        <img src={Forest} alt="hero-img" />
        <div className="hero-text">
          <h1 ref={navbarRef} className="hero-header">The Time is Now</h1>
          <p className="hero-subtext">Together we can save this world for future generations to come</p>
        </div>
        <motion.div 
          className="quote-section"
          animate={CardAnimation}
          initial="hidden"
          variants={cardVariant}
          >
          <img src={Pope} alt="" />
          <div className="quote-info">
            <h1 className="quote-text">“Many things have to change course but it is we human beings above all who need to change”</h1>
            <p className="quote-person">- Pope Francis (Laodato Si)</p>
          </div>
      </motion.div>
      </div>

      {/* Blogs Section */}
      <div className="blogs-section">
        <h1 ref={cardRef} className="blog-header">Blog Posts</h1>
        <div className="blog-lists">

        </div>
      </div>
    </div>
  )
}

export default Home