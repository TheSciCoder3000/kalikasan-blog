import React from 'react'
import { motion } from 'framer-motion'
import './Dashboard.css'
import Env from '../icons/env.svg'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="greeting-cont banner-cont">
        <FirstGreeting />

        {/* slider toggler */}
        <div className="greeting-toggler-cont">
          <div className="toggler greeting-toggle-1 active"></div>
          <div className="toggler greeting-toggle-2"></div>
          <div className="toggler greeting-toggle-3"></div>
        </div>
      </div>
      <div className="overall-progress-cont progress-cont banner-cont">

      </div>
      <div className="latest-task-progress-cont progress-cont banner-cont">

      </div>
      <div className="task-list-cont banner-cont">
        
      </div>
    </div>
  )
}

const FirstGreeting = () => {
  const variants = {
    hover: {
      backgroundColor: '#251308',
      color: 'white',
      transition: { duration: 0.11 }
    }
  }
  return (
    <motion.div className="banner banner-1">
      <h1 className="banner-text">Welcome to <br /> <span className='logo-text'>Kalikasan</span></h1>
      <motion.button className="start-journey"
                     variants={variants}
                     whileHover='hover'>
        Start the Journey
      </motion.button>
      <img src={Env} alt="" className="banner-img" />
    </motion.div>
  )
}

export default Dashboard