import React from 'react'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

const Greeting1 = ({ Env }) => {
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


export default Greeting1