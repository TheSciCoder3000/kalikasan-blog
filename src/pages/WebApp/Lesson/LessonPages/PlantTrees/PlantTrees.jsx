import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../../../../components/Auth'
import Dropzone from '../../../../../components/Dropzone/Dropzone'
import { uploadToStorage } from '../../../../../firebase'
import { setTask } from '../../../../../redux/userSlice'
import './PlantTrees.css'

const PlantTrees = ({ lessonId }) => {
  const dispatch = useDispatch()                            // for dispatching redux actions
  const [editorMode, setEditorMode] = useState(false)       // for toggling the editor mode when making edits
  const { currentUser } = useAuth()                         // retrieving user auth data

  // get user's lesson task data instance
  const taskData = useSelector(state => state.user.data.tasks.find(task => task.lessonId === lessonId))

  // Upload event handler
  const uploadHandler = async (file) => {
    try {
      const imageUrl = await uploadToStorage(currentUser?.uid, file)
      setTask(dispatch, currentUser?.uid, {
        lessonId,
        value: imageUrl
      })
    } catch (e) {
      console.log('something went wrong')
      console.error(e)
      throw e
    }
  }


  return (
    <div className='plant-trees-cont'>
      <div className="task-container">
        {(taskData?.value && taskData?.value !== '') && !editorMode ?
          <>
            <div className="task-actions">
              <button className="edit-btn" onClick={() => setEditorMode(true)}>Edit</button>
            </div>
            <div className="task-preview">
              <img src={taskData.value} alt="" />
            </div>
          </>
          :
          <Dropzone 
            onUpload={uploadHandler}
            cancelEditor={() => setEditorMode(false)}
            editorMode={editorMode} />
        }
      </div>
    </div>
  )
}

export default PlantTrees