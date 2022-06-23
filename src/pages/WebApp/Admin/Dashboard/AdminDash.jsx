import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CircularProgressbar } from 'react-circular-progressbar'
import CountUp from '../../../../components/CountUp'
import './AdminDash.css'

const AdminDash = () => {
  const participants = useSelector(state => state.participants.data)
  const globalTasks = useSelector(state => state.task.data)
  const [tasksFinished, setTasksFinished] = useState([])
  const [numberPaticipants, setNumberPaticipants] = useState(0)

  useEffect(() => {
    if (participants.length > 0) {
      setNumberPaticipants(participants.length)
      setTasksFinished(participants.reduce((tasks, participant) => {
        // iterate through the participant list
        participant.tasks.forEach((task) => {
          if (task.lessonId === 'Seminar') return
          // fint the indx of the task obj that contains the lesson id
          let taskIndx = tasks.findIndex(taskInstance => taskInstance.lessonId === task.lessonId)

          // task array contains the lesson obj
          if (taskIndx !== -1) tasks[taskIndx].counter += 1           // increment the counter

          // else, append new task object to the task array
          else tasks.push({
            lessonId: task.lessonId,
            title: globalTasks.find(gTask => gTask.lessonId === task.lessonId).title,
            counter: 1
          })
        })

        return tasks
      }, []))
    }
  }, [participants])

  const getTotalProgress = () => {
    return tasksFinished.reduce((sum, task) => {
      return sum + (task.counter)
    }, 0)
  }
  

  return (
    <div className='admin-dashboard'>
      <h1 className="page-header">Admin Dashboard</h1>
      <div className="dashboard-cont">
        <div className="info-cont number-of-participants">
          <CountUp from={0} to={numberPaticipants} />
          <p>Total Participants</p>
        </div>
        <div className="info-cont task-progress">
          <div className="total-progress">
            <h3>Total Activity Progress</h3>
            <CircularProgressbar 
              value={((getTotalProgress() / (numberPaticipants*globalTasks.length)) || 0)*100}
              text={`${(((getTotalProgress() / (numberPaticipants*globalTasks.length)) || 0)*100).toFixed(2)}%`} />
          </div>
          <div className="progress-details">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDash