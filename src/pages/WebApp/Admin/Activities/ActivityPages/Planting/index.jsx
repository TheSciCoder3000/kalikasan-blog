import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Planting.css'

const Planting = ({ activityId }) => {
  const allParticipants = useSelector(state => state.participants.data)
  const participantSubmissions = useSelector(state => state.participants.data
    .map(participant => { return {
      name: `${participant.FirstName} ${participant.LastName}`,
      id: participant.id,
      taskData: participant.tasks.find(task => task.lessonId === activityId)
    } })
    .filter(entry => entry.taskData ? true : false)
  )

  return (
    <div className='admin-planting'>
      <div className="planting-header">
        <h1>Activity #2: Planting Trees</h1>
        <p>{participantSubmissions.length} out of {allParticipants.length} have uploaded their pictures</p>
      </div>
      <hr />
      <div className="submissions-cont">
        {participantSubmissions.map(submissionEntry => (
          <Link key={submissionEntry.id} className="entry-cont" to={`/app/admin/participants/${submissionEntry.id}`}>
            <img src={submissionEntry.taskData?.value} alt="" />
            <div className="entry-details">
              <h4 className="participant-name">{submissionEntry.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Planting