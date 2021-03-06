import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../../../../components/Auth'
import Dropzone from '../../../../../components/Dropzone/Dropzone'
import { uploadToStorageResumeable } from '../../../../../firebase'
import { setTask } from '../../../../../redux/userSlice'
import imageCompression from 'browser-image-compression'
import './PlantTrees.css'

const PlantTrees = ({ lessonId }) => {
  const dispatch = useDispatch()                            // for dispatching redux actions
  const [editorMode, setEditorMode] = useState(false)       // for toggling the editor mode when making edits
  const { currentUser } = useAuth()                         // retrieving user auth data

  const [uploadProgress, setUploadProgress] = useState(null)


  // get user's lesson task data instance
  const [taskLoading, taskData] = useSelector(state => {
    const userStore = state.user
    return [userStore.taskLoading, userStore.data.tasks.find(task => task.lessonId === lessonId)]
  })

  // Upload event handler
  const uploadHandler = async (file, onSuccess, onError) => {
    // update upload progress state handler
    const handler = (snapshot) => setUploadProgress(`Uploading - ${((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(2)}%`)

    // error handler
    const error = (e) => {
      console.log('Error on upload to storage Resumeable')
      console.error(e)
      setUploadProgress(null)           // Remove the progress text
      onError(e)                        // Set dropzone uploading state to false and log error
    }

    // on upload complete handler
    const complete = (imageUrl) => {
      // Update firestore participant's task data with image url
      setTask(dispatch, currentUser?.uid, {
        lessonId,
        value: imageUrl
      })
      onSuccess()                       // set dropzone uploading state to false
      setUploadProgress(null)           // Remove the progress text
    } 

    // initialize image compression options
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1280,
      useWebWorker: true,
      onProgress: (percentage) => setUploadProgress(`Compressing - ${percentage}%`)
    }

    // Try compressing and uploading image
    try {
      const compressedFile = await imageCompression(file, options)
      uploadToStorageResumeable(currentUser?.uid, compressedFile, {
        handler,
        error,
        complete
      })
    } catch (e) {
      console.error(e)
      onError(e)
      setUploadProgress(null)
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
        <p>
          Trees absorb the carbon dioxide in the air and convert them to oxygen. 
          Since they absorb carbon dioxide, they reduce the greenhouse gases found in our atmosphere, 
          which may result in lower temperatures. Trees and plants are simple machines that are 
          easy to produce and effective in reducing the effects of climate change. 
          That is why we encourage our participants in our planting activity.
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
              {taskLoading ? 
                <p>Fetching image</p>
                :
                <img src={taskData.value} alt="" />
              }
            </div>
          </>
          :
          <Dropzone 
            uploadProgress={uploadProgress}
            onUpload={uploadHandler}
            cancelEditor={() => setEditorMode(false)}
            editorMode={editorMode} />
        }
      </div>
    </div>
  )
}

export default PlantTrees