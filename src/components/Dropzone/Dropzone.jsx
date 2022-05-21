import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './Dropzone.css'

const Dropzone = ({ onUpload, cancelEditor, editorMode }) => {
    const [imagePreview, setimagePreview] = useState(null)
    const { acceptedFiles, getRootProps, getInputProps, clearFiles } = useDropzone({
        accept: { 'image/*': [] },
        maxFiles: 1,
        maxSize: 10000000
    })

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


    const uploadHandler = async (e) => {
        e.preventDefault()

        if (acceptedFiles.length < 1) return console.error('accpeted files is null')
        onUpload(acceptedFiles[0])
    }

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
                        <div className="dropzone-actions">
                            <button className='upload-btn' type='submit'>Upload</button>
                            <button className='cancel-btn' onClick={cancelHandler}>Cancel</button>
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