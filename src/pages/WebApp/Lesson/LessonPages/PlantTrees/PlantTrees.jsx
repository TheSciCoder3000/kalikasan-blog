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
      <div className="lesson-cont">
        <h1>Activity 2: Planting Trees</h1>
        <p>
          Good day participants! This week we'll be having another activity. 
          This activity focuses on planting. Don't worry we wont be asking for 
          too much of your time but before all that we'll provide a basic insight 
          on how this relates to the global warming and climate change crisis.
        </p>
        <h2>Now It's Your Turn</h2>
        <p>
          Upload an image of yourself planting. 
          May it be a tree or any specie of plant. 
          Feel free to upload them down below.
        </p>
        
      </div>
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