import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditorConvertToMarkdown from './EditorConvertToMarkdown'
import { useAuth } from '../components/Auth'
import { setTask } from '../redux/userSlice'
import { markdownToDraft } from 'markdown-draft-js'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import draftjsToHtml from 'draftjs-to-html'

// Enhanced Editor Component based from react-editor-wysiwyg
// It directly updates the task redux state and sends an update request to the firestore db
// TODO: Fix the whitespace detection system whether to display the buttons or save in db

const TaskContainer = ({ lessonId }) => {
    const dispatch = useDispatch()                                      // helper function for dispatching state actions

    const [editMode, setEditMode] = useState(false)                     // display text editor state
    const [taskMarkdown, setTaskMarkdown] = useState(null)              // markdown state of the editor
    const { currentUser } = useAuth()                                   // used to get the user id
    const taskLoading = useSelector(state => state.user.taskLoading)    // used to identify if the udpate request is pending
    

    // useSelect to check if user has answer for the particular lesson
    const taskData = useSelector(state => state.user.data?.tasks?.find(task => task.lessonId === lessonId)?.value)


    const onSubmitText = () => {
        let newTask = {
            lessonId,
            value: taskMarkdown || ''
        }

        setTask(dispatch, currentUser.uid, newTask)
        if (!(/^\s*$/.test(taskMarkdown))) setEditMode(false)
    }

    console.log('test regex', /^\s*$/.test(taskData))
    console.log('task data not null: ', !taskData)
    console.log('edit mode', editMode)
    console.log('task loading ', taskLoading)

    // if only whitespace, null, in edit mode or update request is pending then display text editor
    return (/^\s*$/.test(taskData) || !taskData || editMode || taskLoading ?
        <div className='task-editor-cont'>
            <EditorConvertToMarkdown 
                onEditorChange={setTaskMarkdown}
                initialState={EditorState.createWithContent(convertFromRaw(markdownToDraft(taskData)))}
                readOnly={taskLoading} />
            {taskLoading ?
                <>...Saving</>
                :
                <>
                    <button onClick={onSubmitText} className="submit-text">Save</button>
                    {editMode && (
                        <button onClick={() => setEditMode(false)} className="cancel-edit">Cancel</button>
                    )}
                </>
            }
        </div>
        :
        <div className='task-ans-cont'>
            <div dangerouslySetInnerHTML={{ __html: draftjsToHtml(markdownToDraft(taskData)) }}></div>
            <button disabled={editMode} onClick={() => setEditMode(true)} className="edit-text">Edit</button>
        </div>
    )
}

export default TaskContainer