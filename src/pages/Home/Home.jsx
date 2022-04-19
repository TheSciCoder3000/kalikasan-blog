import './Home.css'
import Forest from './trees-edited.jpg'
import Pope from './pope.jpg'
import NavBar from '../../components/NavBar/NavBar'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { AnimationVariants } from './variants'

const Home = () => {
  const CardAnimation = useAnimation()
  const [ cardRef, cardInView ] = useInView({ threshold: 0.01 })
  
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


  return (
    <div className='home-page'>
      {/* Sticky Navbar */}
      <NavBar className='home-nav' animation={NavbarAnimation} />
      
      {/* Hero Section */}
      <div className="hero-section">
        {/* Hero Img */}
        <div className='hero-img' style={{ backgroundImage: `url("${Forest}")` }} alt="hero-img" />

        {/* Hero Texts */}
        <div className="hero-text">
          <h1 ref={navbarRef} className="hero-header">The Time is Now</h1>
          <p className="hero-subtext">Together we can save this world for future generations to come</p>
          <motion.button variants={AnimationVariants.HeroBtn}
                         whileHover='hover'
                         whileTap='tap'
                         className="join-us">
            Join Us
          </motion.button>
        </div>

      </div>

      {/* Advocacy Information */}
      <div className="advoc-info">
        <div className="pollution">

        </div>
        <div className="about-us">

        </div>
      </div>

      {/* Quote by Pope Francis */}
      <motion.div className="quote-card"
                  ref={cardRef}
                  animate={CardAnimation}
                  initial="hidden"
                  variants={AnimationVariants.Card}>

        <motion.img variants={AnimationVariants.CardChildren} src={Pope} alt="pope-francis" />
        <div className="quote-info">
          <motion.h1 variants={AnimationVariants.CardChildren} className="quote-text">“Many things have to change course but it is we human beings above all who need to change”</motion.h1>
          <motion.p variants={AnimationVariants.CardChildren} className="quote-person">- Pope Francis (Laodato Si)</motion.p>
        </div>

      </motion.div>

      {/* Membership Sign Up */}
      <div className="call-to-action">

      </div>
    </div>
  )
}

export default Home