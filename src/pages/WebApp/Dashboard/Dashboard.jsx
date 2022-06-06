import Todo from '../../../components/Todo'
import Greeting1 from '../../../components/GreetingBanner/Greeting1'
import Posters from '../../../components/Posters';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useSelector } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';

import Env from '../icons/env.svg'
import './Dashboard.css'


const Dashboard = () => {
  const tasks = useSelector(state => state.task.data)                     // get global task data
  const userTaskData = useSelector(state => state.user.data.tasks)        // get user task data to filter active tasks

  // Filter active tasks based on whitespace only and unstarted task
  const activeTask = tasks.filter(task => {
      let taskInstance = userTaskData.find(taskData => taskData.lessonId === task.lessonId)

      if (taskInstance) {
          if (/^\s*$/.test(taskInstance.value)) return true               // if whitespace then include
          else return false                                               // otherwise exclude
      } else return true
  })


  return (
    <div className='dashboard'>
      <div className="greeting-cont banner-cont">
        <Greeting1 Env={Env} />

        {/* slider toggler */}
        <div className="greeting-toggler-cont">
          <div className="toggler greeting-toggle-1 active"></div>
          {/* <div className="toggler greeting-toggle-2"></div>
          <div className="toggler greeting-toggle-3"></div> */}
        </div>
      </div>
      <div className="calendar-grid-cont">
        <h2 className="calendar-header banner-header">Posters</h2>
        <div className="calendar-cont banner-cont">
          <Posters />
        </div>
      </div>
      <div className="task-grid-cont">
        <h2 className="task-header banner-header">Tasks</h2>
        <Todo activeTasks={activeTask} />
      </div>
      <div className="progress-grid-cont banner-cont">
        <div className="progress-header">Progress</div>
        <div className="progress-cont">
          {/* Assign values to prop value and text */}
          <CircularProgressbar value={100-((activeTask.length/tasks.length)*100)} text={`${100-((activeTask.length/tasks.length)*100)}%`} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard