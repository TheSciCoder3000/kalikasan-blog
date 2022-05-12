import React from 'react'
import TaskContainer from '../../../../../components/TaskContainer'
import './Introduction.css'

const IntroductionPage = ({ lessonId }) => {
  return (
    <div className='intro-cont'>
      <div className="detail-cont text-cont">
        <h1 className='text-header'>Greetings Participants!!!</h1>
        <p className='text-p'>We are the Kalikasan Advocacy, an advocacy created for our NSTP course to bring up one of the most greatest concern we have since the dawn of the industrial evolution, Global Warming. Approximately 1.5 trillion tonnes of carbon dioxide have been released into the atmosphere since the industrial revolution. As more carbon dioxide is being pumped into the atmoshphere, global temperature starts to increase as heat from the sun is trapped within the earth’s atmosphere. This phenomenon causes ripples with the earth’s ecosystem causing great changes with the earth’s climate. Strong typhoons starts forming often, hotter summers and increase of earth’s sea level due to the melting of polar ice caps. If nothing is done, soon we’ll be left with a world that’s too late to be saved.</p>
        <p className='text-p'>This advocacy aims to bring awareness through our participants how serious an issue Global warming and climate change is. So join us as we learn more about the phenomenon that’s slowly burning the world we live in. Change starts with us before the rest of the world. If we want to persuade other people to take an action then we too must learn to make the first step in reviving this messed up world we live in.</p>
      </div>
      <div className="task-cont text-cont">
        <h1 className='text-header'>Introduce Yourself to the Team</h1>
        <p className='text-p'>Since you’re already here reading this article, I’m assuming you’ve made an account already in this website. So don’t be shy and introduce yourself to us. Tell us your name and tell us what you think about global warming and climate change.</p>
        <hr />
        <TaskContainer lessonId={lessonId} />
      </div>
    </div>
  )
}

export default IntroductionPage