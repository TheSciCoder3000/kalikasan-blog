import './Home.css'
import './base.css'

// Image in Div
import Forest from './trees-edited.jpg'
import Clean from './movement/cleanup-drive.jpg'

// Image in Img
import Pope from './pope.jpg'
import Factory from './pollution/factory-3.png'
import Flood from './poor/floods.jpg'
import Farmer from './poor/poorFarmers.jpg'
import House from './poor/poorHouse.jpg'
import Children from './poor/poorChildren.png'
import Water from './poor/poorWater.jpg'
import Land from './poor/poorLand.webp'
import Fire from './fire.jpg'
import Destruction from './destruction.jpg'
import Community from './community.jpg'


import NavBar from '../../components/NavBar/NavBar'
import LessonModule from '../../components/LessonModule'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { AnimationVariants } from './variants'
import locomotiveScroll from 'locomotive-scroll'
import { Link, useHistory } from 'react-router-dom'


const lessons = [
  {
    title: 'Introduction:<br /> Into the Fire',
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

const Home = ({ appRef, currentUser }) => {
  const history = useHistory()
  
  // Pre-render screen when images are loading
  const heroImgRef = useRef(null)
  const cleanImgRef = useRef(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (appRef.current) {
      let scroll = new locomotiveScroll({
        el: appRef.current,
        smooth: true,
        multiplier: 0.75
      })
      scroll.stop()

      // Load div img function
      const loadDivImg = (divRef, src) => new Promise((resolve) => {
        let heroImg = new Image()
        heroImg.addEventListener('load', () => {
          divRef.current.style.backgroundImage = `url("${src}")`
          resolve()
        })
        heroImg.addEventListener('error', resolve)
        heroImg.src = src
      })

      // Promise all images are loaded
      let loadPromises = [
        loadDivImg(heroImgRef, Forest),
        loadDivImg(cleanImgRef, Clean),
        ...Array.prototype.slice.call(document.images).map(imageEl => new Promise((resolve) => {
          imageEl.onload = resolve
        }))
      ]

      // When all promises are resolved, remove loading screen
      Promise.all(loadPromises)
        .then(() => {
          setLoading(false)
          scroll.start()
        })
    }
  }, [appRef])

  return (
    <div className='home-page'>
      {loading && (
        <div className="loading-cont">
          <h1>Loading...</h1>
        </div>
      )}
      {/* Sticky Navbar */}
      <NavBar className='home-nav' currentUser={currentUser} />
      
      {/* Hero Section */}
      <div className="hero-section">
        {/* Hero Img */}
        <div className="hero-img-target" id='hero-img-target' />
        <div className='hero-img'
             ref={heroImgRef}
             data-scroll data-scroll-sticky data-scroll-target='#hero-img-target' />

        {/* Hero Texts */}
        <div className="hero-text">
          <h1 className="hero-header">The Time is Now</h1>
          <p className="hero-subtext">Together we can save this world for future generations to come</p>
          <motion.button variants={AnimationVariants.HeroBtn}
                         whileHover='hover'
                         whileTap='tap'
                         onClick={() => history.push(currentUser ? '/app' : '/signup')}
                         className="join-us">
            {currentUser ? 'Start Now' : 'Join Us'}
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
          <img alt='' src={Factory} className="pollution-img" data-scroll data-scroll-speed="1.8" />
          <div className="section-container pollution-section">
            <h2 className="section-header pollution-header">The World is Changing</h2>
            <p className="section-desc pollution-desc">
              Due to the effects of human technology, our world is slowly destroying 
              itself as global warming and climate change worsen. Pollution continues to become 
              an issue as carbon dioxide emission increases causing a rise in global temperatures.
            </p>
          </div>
        </div>

        <div className="poor-container">
          <div className="section-container poor-section">
            <h2 className="section-header poor-header">And it is the Poor that Suffer the Most</h2>
            <p className="section-desc poor-desc">
              Poor countries are the ones that suffer the most in this incident 
              as they rely on the Earth’s climate for survival and resources. 
              As climate change continue to worsen, it becomes more difficult for 
              third world countries to efficiently grow crops to feed themselves.
            </p>
          </div>
          <div className="img-collage">
            <div className="img-cont" data-scroll data-scroll-speed="2.2" id="flood">
              <img alt='' src={Flood}  className="img-card" />
            </div>
            <div className="img-cont" data-scroll data-scroll-speed="3" id="farmer">
              <img alt='' src={Farmer}  className="img-card" />
            </div>
            <div className="img-cont" data-scroll data-scroll-speed="1.4" id="house">
              <img alt='' src={House}  className="img-card" />
            </div>
            <div className="img-cont" data-scroll data-scroll-speed="2.5" id="children">
              <img alt='' src={Children}  className="img-card" />
            </div>
            <div className="img-cont" data-scroll data-scroll-speed="1" id="land">
              <img alt='' src={Land}  className="img-card" />
            </div>
            <div className="img-cont" data-scroll data-scroll-speed="1.8" id="water">
              <img alt='' src={Water}  className="img-card" />
            </div>
            
          </div>
        </div>

        <div className="unity-container">
          <div className="fixed-wrapper">
            <div className="fixed_target" id="fixed-target"></div>
            <div ref={cleanImgRef} data-scroll data-scroll-sticky data-scroll-target="#fixed-target" className="img-container fixed" />
          </div>
          <div className="section-container unity-section" id="fixed-elements">
            <div className="section-text-cont" data-scroll data-scroll-sticky data-scroll-target="#fixed-elements">
              <div>
                <h2 className="section-header unity-header">Together We are Strong</h2>
                <p className="section-desc unity-desc">
                  Join us as we help bring back our world to its former glory. Technology has been a great 
                  help to us but we can no longer ignore the destruction we have caused to our home planet. 
                  One man cannot solve this alone but together we can change the world once again.
                </p>
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
          <p className="content-desc">
            The Advocacy, Kalikasan, aims to infrom its participants of the current issue 
            regarding climate change and Global warming. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Integer pretium vestibulum arcu, quis porttitor augue. 
            Pellentesque maximus leo ac eros iaculis sagittis sed sit amet nisl.
          </p>
        </div>

        <div className="advocacy-modules" >
          {lessons.map((lesson, indx) => (
            <LessonModule lesson={lesson} indx={indx} key={indx} variants={AnimationVariants.LessonModule} />
          ))}
        </div>
      </div>

      {/* Membership Sign Up */}
      <div className="call-to-action">

      </div>
    </div>
  )
}

export default Home