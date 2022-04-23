import './Home.css'
import './base.css'

import Forest from './trees-edited.jpg'
import Pope from './pope.jpg'
import Factory from './pollution/factory-3.png'
import Flood from './poor/floods.jpg'
import Farmer from './poor/poorFarmers.jpg'
import House from './poor/poorHouse.jpg'
import Children from './poor/poorChildren.png'
import Water from './poor/poorWater.jpg'
import Land from './poor/poorLand.webp'
import Clean from './movement/cleanup-drive.jpg'
import Fire from './fire.jpg'
import Destruction from './destruction.jpg'
import Community from './community.jpg'

import NavBar from '../../components/NavBar/NavBar'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { AnimationVariants } from './variants'
import locomotiveScroll from 'locomotive-scroll'
import { Link } from 'react-router-dom'


const lessons = [
  {
    title: 'Introduction: Into the Fire',
    desc: 'some lesson about heat and fire like global warming',
    src: Fire
  }, 
  {
    title: 'Destruction of a Home',
    desc: 'Effects of climate and change global warming to our community and lifestyle',
    src: Destruction
  }, 
  {
    title: 'Promise for a better Future',
    desc: 'Ways on what we can do to prevent this inevitable future',
    src: Community
  }, 
]

const Home = ({ appRef }) => {
  const NavbarAnimation = useAnimation()
  const [ navbarRef, navbarInView ] = useInView({ threshold: 0.1 })

  const lessonAnimation = useAnimation()
  const [lessonRef, lessonInView] = useInView({ threshold: 0.9, rootMargin: '4000px 0px 300px 0px' })
  
  useEffect(() => {
    if (!navbarInView) NavbarAnimation.start('visible')
    else NavbarAnimation.start('hidden')
  }, [navbarInView])

  useEffect(() => {
    console.log('lesson in view: ', lessonInView)
    if (lessonInView) lessonAnimation.start('visible')
    else lessonAnimation.start('hidden')
  }, [lessonInView])

  const initalizeScroll = useRef(false)
  const [loading, setloading] = useState(true)
  useEffect(() => {
    if (appRef.current && !initalizeScroll.current) {
      console.log(appRef.current)
      let scroll = new locomotiveScroll({
        el: appRef.current,
        smooth: true,
        multiplier: 0.75
      })
      scroll.stop()
      window.onload = () => {
        scroll.start()
        setloading(false)
      }
      initalizeScroll.current = true
    }
  }, [appRef])


  return (
    <div className='home-page'>
      {loading && (
        <div className="loading-cont">
          Loading...
        </div>
      )}
      {/* Sticky Navbar */}
      <NavBar className='home-nav' animation={NavbarAnimation} />
      
      {/* Hero Section */}
      <div className="hero-section">
        {/* Hero Img */}
        <div className="hero-img-target" id='hero-img-target' />
        <div className='hero-img' 
             data-scroll data-scroll-sticky data-scroll-target='#hero-img-target'
             style={{ backgroundImage: `url("${Forest}")` }} 
             alt="hero-img" />

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

      {/* Quote by Pope Francis */}
      <div className="quote-card">
        <div className="quote-info" data-scroll data-scroll-speed="1.4">
          <h1 className="quote-text">“Many things have to change course but it is we human beings above all who need to change”</h1>
          <p className="quote-person">- Pope Francis (Laodato Si)</p>
        </div>
        <div className="img-container" data-scroll data-scroll-speed="0.5">
          <img src={Pope} alt="pope-francis" />
        </div>
      </div>

      {/* Organization Content */}
      <div className="org-content">
        <div className="pollution-container">
          <img src={Factory} className="pollution-img" data-scroll data-scroll-speed="1.8" />
          <div className="section-container pollution-section">
            <h2 className="section-header pollution-header">The World is Changing</h2>
            <p className="section-desc pollution-desc">Due to the effects of human technology, our world is slowly destroying itself as global warming and climate change worsen. Pollution continues to become an issue as carbon dioxide emission increases causing a rise in global temperatures.</p>
          </div>
        </div>

        <div className="poor-container">
          <div className="section-container poor-section">
            <h2 className="section-header poor-header">And it is the Poor that Suffer the Most</h2>
            <p className="section-desc poor-desc">Poor countries are the ones that suffer the most in this incident as they rely on the Earth’s climate for survival and resources. As climate change continue to worsen, it becomes more difficult for third world countries to efficiently grow crops to feed themselves.</p>
          </div>
          <div className="img-collage">
            <div className="img-cont" data-scroll data-scroll-speed="2.2" id="flood">
              <img src={Flood}  className="img-card" />
            </div>
            <div className="img-cont" data-scroll data-scroll-speed="3" id="farmer">
              <img src={Farmer}  className="img-card" />
            </div>
            <div className="img-cont" data-scroll data-scroll-speed="1.4" id="house">
              <img src={House}  className="img-card" />
            </div>
            <div className="img-cont" data-scroll data-scroll-speed="2.5" id="children">
              <img src={Children}  className="img-card" />
            </div>
            <div className="img-cont" data-scroll data-scroll-speed="1" id="land">
              <img src={Land}  className="img-card" />
            </div>
            <div className="img-cont" data-scroll data-scroll-speed="1.8" id="water">
              <img src={Water}  className="img-card" />
            </div>
            
          </div>
        </div>

        <div className="unity-container">
          <div className="fixed-wrapper">
            <div className="fixed_target" id="fixed-target"></div>
            <div data-scroll data-scroll-sticky data-scroll-target="#fixed-target" style={{ backgroundImage: `url("${Clean}")` }} className="img-container fixed" />
          </div>
          <div className="section-container unity-section" id="fixed-elements">
            <div className="section-text-cont" data-scroll data-scroll-sticky data-scroll-target="#fixed-elements">
              <div>
                <h2 className="section-header unity-header">Together We are Strong</h2>
                <p className="section-desc unity-desc">Join us as we help bring back our world to its former glory. Technology has been a great help to us but we can no longer ignore the destruction we have caused to our home planet. One man cannot solve this alone but together we can change the world once again.</p>
                <Link to='/signup' className='join-link'>Join the Movement !</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advocacy Content */}
      <div className="advocacy-content">
        <div className="content-text">
          <h1 className="content-header">Kalikasan Advocacy</h1>
          <p className="content-desc">The Advocacy, Kalikasan, aims to infrom its participants of the current issue regarding climate change and Global warming. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium vestibulum arcu, quis porttitor augue. Pellentesque maximus leo ac eros iaculis sagittis sed sit amet nisl.</p>
        </div>

        <div className="advocacy-modules" >
          {lessons.map((lesson, indx) => (
            <LessonModule lesson={lesson} indx={indx} key={indx} />
          ))}
        </div>
      </div>

      {/* Membership Sign Up */}
      <div className="call-to-action">

      </div>
    </div>
  )
}

const LessonModule = ({ lesson, indx }) => {
  const lessonModuleAnimation = useAnimation()

  return (
    <motion.div className={`module-${indx+1} module-container`}
                onHoverStart={() => lessonModuleAnimation.start('hover')}
                onHoverEnd={() => lessonModuleAnimation.start('hidden')}>
      <img src={lesson.src} alt={`module-${indx+1} pic`} className="lesson-pic" />
      <motion.div className="lesson-content"
                  initial='hidden'
                  animate={lessonModuleAnimation}
                  variants={AnimationVariants.LessonModule}>
        <h3 className="lesson-header">{lesson.title}</h3>
        <p className="lesson-desc">{lesson.desc}</p>
      </motion.div>
    </motion.div>
  )
}

export default Home