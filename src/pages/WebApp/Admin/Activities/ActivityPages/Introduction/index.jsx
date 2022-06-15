import React from 'react'
import { useSelector } from 'react-redux'
import { markdownToDraft } from 'markdown-draft-js'
import draftjsToHtml from 'draftjs-to-html'
import './Introduction.css'
import { Link } from 'react-router-dom'

const Introduction = ({ activityId }) => {
  const allParticipants = useSelector(state => state.participants.data)
  const participantData = useSelector(state => state.participants.data.filter(participant => participant.tasks.some(task => task.lessonId === activityId)))
  return (
    <div className='admin-introduction'>
      <h1>Introductions</h1>
      <p>{participantData.length} out of {allParticipants.length} are have submitted their introductions</p>
      <hr />
      <div className="introductions-cont">
        {participantData.map(participant => 
          <div className="intro-item">
            <Link to={`/app/admin/participants/${participant.id}`} className='participant-name'>{participant.FirstName} {participant.LastName}</Link>
            <hr />
            <div className="intro-content" 
              dangerouslySetInnerHTML={{ __html: draftjsToHtml(markdownToDraft(participant.tasks.find(task => task.lessonId === "Introduction").value)) }}/>
          </div>  
        )}
      </div>
    </div>
  )
}

export default Introduction