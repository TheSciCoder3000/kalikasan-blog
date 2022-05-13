import Todo from '../../../components/Todo'
import Greeting1 from '../../../components/GreetingBanner/Greeting1'

import Env from '../icons/env.svg'
import './Dashboard.css'


const Dashboard = () => {
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

export default Dashboard