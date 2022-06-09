import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './Dropzone.css'

const Dropzone = ({ uploadProgress, onUpload, cancelEditor, editorMode }) => {
    const [uploading, setUploading] = useState(false)                       // upload state
    const [imagePreview, setimagePreview] = useState(null)                  // image preview state

    // dropzone states and functions
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: { 'image/*': [] },
        maxFiles: 1,
        maxSize: 10000000
    })

    // when user drags in an img, set it as image preview
    useEffect(() => {
        if (acceptedFiles.length > 0) {
            const currImg = acceptedFiles[0]

            let reader = new FileReader()
            reader.addEventListener('load', () => {
                setimagePreview(reader.result)
            }, false)
            reader.readAsDataURL(currImg)
        }
    }, [acceptedFiles])


    // Upload event handler
    const uploadHandler = async (e) => {
        console.log('uploading')
        e.preventDefault()
        setUploading(true)

        if (acceptedFiles.length < 1) return console.error('accpeted files is null')
        onUpload(acceptedFiles[0], 
            () => {
                setUploading(false)
                cancelEditor()
            },
            e => {
            setUploading(false)
            console.error(e)
        })}

    // Cancel event handler
    const cancelHandler = () => {
        setimagePreview(null)
        cancelEditor()
        acceptedFiles.length = 0
        acceptedFiles.splice(0, acceptedFiles.length)
    }

    
    return (
        <>
            {(editorMode && acceptedFiles.length < 1) && (
                <button className="cancel-editor" onClick={cancelEditor}>Cancel</button>
            )}
            <form onSubmit={uploadHandler} className='dropzone-form-cont'>
                {acceptedFiles.length < 1 ?
                    <div {...getRootProps({ className: 'dropzone-cont' })}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                        <em>Only 1 image with max size of 10 MB</em>
                    </div>
                    : !imagePreview ?
                    <>Loading image</>
                    :
                    <>
                        <div className="dropzone-topbar">
                            <div className="dropzone-actions">
                                <button disabled={uploading} className='upload-btn' type='submit'>Upload</button>
                                <button disabled={uploading} className='cancel-btn' onClick={cancelHandler}>Cancel</button>
                            </div>
                            {uploadProgress && <div className="progress-status">{uploadProgress}</div>}
                        </div>
                        <div className="dropzone-preview">
                            <img src={imagePreview} alt="" />
                        </div>
                    </>
                }

            </form>
        </>
    )
}

export default Dropzone