import React from 'react'
import { Link } from 'react-router-dom'


// Task Component in the dashboard page
const Todo = ({ activeTasks }) => {

    return (
        <div className="tasks-cont banner-cont">
            <ul>
                {activeTasks.map(task => 
                    <Link to={`/app/lessons/${task.lessonId}`} className="task-list">{task.title}</Link>
                )}
            </ul>
        </div>
    )
}

export default Todo