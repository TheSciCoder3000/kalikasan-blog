import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Todo = () => {
    const tasks = useSelector(state => state.task.data)
    const userTaskData = useSelector(state => state.user.data.tasks)

    const activeTask = tasks.filter(task => {
        let taskInstance = userTaskData.find(taskData => taskData.lessonId === task.lessonId)

        if (taskInstance) {
            if (/^\s*$/.test(taskInstance.value)) return true
            else return false
        } else return true
    })

    return (
        <div className="tasks-cont banner-cont">
            <ul>
                {activeTask.map(task => 
                    <Link to={`/app/lessons/${task.lessonId}`} className="task-list">{task.title}</Link>
                )}
            </ul>
        </div>
    )
}

export default Todo