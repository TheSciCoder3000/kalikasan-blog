import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Poster1 from './poster_1.jpg'
import Poster2 from './poster_2.jpg'
import './Poster.css'

const Posters = () => {
  const [togglePoster, setTogglePoster] = useState(false)

  useEffect(() => {
    const seconds = 20
    const toggleInterval = setInterval(() => {
      setTogglePoster(state => !state)
    }, seconds*1000)

    return () => clearInterval(toggleInterval)
  }, [])

  const posterVariant = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.4 }
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.4, duration: 0.4 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <div className='poster-cont'>
      <div className="post-indicators-cont">
        <div className={`post-indicator ${togglePoster ? 'active-post' : ''}`} onClick={() => setTogglePoster(true)}></div>
        <div className={`post-indicator ${!togglePoster ? 'active-post' : ''}`} onClick={() => setTogglePoster(false)}></div>
      </div>
      <AnimatePresence>
        {togglePoster ? 
          <motion.img 
            src={Poster1}
            key='poster-1'
            alt=""
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={posterVariant} />
          : 
          <motion.img 
            src={Poster2}
            key='poster-2' 
            alt=""
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={posterVariant} />
        }
      </AnimatePresence>
    </div>
  )
}

export default Posters