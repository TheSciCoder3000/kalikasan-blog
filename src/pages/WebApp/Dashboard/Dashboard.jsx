import React from 'react'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Dashboard.css'
import Env from '../icons/env.svg'
import { useSelector } from 'react-redux'
import Todo from '../../../components/Todo'

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
      <div className="calendar-grid-cont">
        <h2 className="calendar-header banner-header">Calendar</h2>
        <div className="calendar-cont banner-cont">

        </div>
      </div>
      <div className="task-grid-cont">
        <h2 className="task-header banner-header">Tasks</h2>
        <Todo />
      </div>
      <div className="progress-grid-cont banner-cont">
        Progress
      </div>
    </div>
  )
}

const FirstGreeting = () => {
  const history = useHistory()
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
                     whileHover='hover'
                     onClick={() => history.push('/app/lessons')}>
        Start the Journey
      </motion.button>
      <img src={Env} alt="" className="banner-img" />
    </motion.div>
  )
}

export default Dashboard