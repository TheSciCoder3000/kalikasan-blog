import { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import EditorConvertToMarkdown from './EditorConvertToMarkdown'

// Display editor if user has no answer stored in the db
// or if user has answer but chooses to edit it after clicking the edit btn

const TaskContainer = ({ lessonId }) => {
    const [taskMarkdown, setTaskMarkdown] = useState(null)
    // useSelect to check if user has answer for the particular lesson
    const taskData = useSelector(state => state.user.data?.tasks?.find(task => task.lessonId === lessonId)?.value.replace('\\n', '\n'))

    console.log(taskData)
    return (taskData === '' || taskData === '\n' || !taskData ?
        <>
            <EditorConvertToMarkdown onEditorChange={setTaskMarkdown} />
        </>
        :
        <div className='task-ans-cont'>
            <ReactMarkdown>{taskData}</ReactMarkdown>
        </div>
    )
}

export default TaskContainer