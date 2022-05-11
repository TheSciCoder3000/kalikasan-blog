import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import EditorConvertToMarkdown from './EditorConvertToMarkdown'
import { useAuth } from '../components/Auth'
import { setTask } from '../redux/userSlice'
import { markdownToDraft } from 'markdown-draft-js'
import { EditorState, convertFromRaw } from 'draft-js'

// Display editor if user has no answer stored in the db
// or if user has answer but chooses to edit it after clicking the edit btn

const TaskContainer = ({ lessonId }) => {
    const [editMode, setEditMode] = useState(false)
    const [taskMarkdown, setTaskMarkdown] = useState(null)
    const { currentUser } = useAuth()
    const userData = useSelector(state => state.user.data)
    const dispatch = useDispatch()

    // useSelect to check if user has answer for the particular lesson
    const taskData = useSelector(state => state.user.data?.tasks?.find(task => task.lessonId === lessonId)?.value.replace('\\n', '\n'))

    const onSubmitText = () => {
        let newTask = {
            lessonId,
            value: taskMarkdown || ''
        }

        let i = userData.tasks.findIndex(task => task.lessonId === lessonId)
        setTask(dispatch, currentUser.uid, newTask)
        setEditMode(false)
    }

    const onEditText = () => {
        setEditMode(true)
    }

    console.log(taskData)
    return (taskData === '' || taskData === '\n' || !taskData || editMode ?
        <>
            <EditorConvertToMarkdown 
                onEditorChange={setTaskMarkdown}
                initialState={EditorState.createWithContent(convertFromRaw(markdownToDraft(taskData)))} />
            <button onClick={onSubmitText} className="submit-text">Save</button>
            {editMode && (
                <button onClick={() => setEditMode(false)} className="cancel-edit">Cancel</button>
            )}
        </>
        :
        <div className='task-ans-cont'>
            <ReactMarkdown>{taskData}</ReactMarkdown>
            <button onClick={onEditText} className="edit-text">Edit</button>
        </div>
    )
}

export default TaskContainer