import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../../../../components/Auth'
import Dropzone from '../../../../../components/Dropzone/Dropzone'
import { uploadToStorage } from '../../../../../firebase'
import { setTask } from '../../../../../redux/userSlice'
import './PlantTrees.css'

const PlantTrees = ({ lessonId }) => {
  const dispatch = useDispatch()
  const [editorMode, setEditorMode] = useState(false)
  const { currentUser } = useAuth()
  const taskData = useSelector(state => state.user.data.tasks.find(task => task.lessonId === lessonId))
  console.log(taskData)

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

  console.log('preview mode', (taskData?.value && taskData?.value !== '') && !editorMode)
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