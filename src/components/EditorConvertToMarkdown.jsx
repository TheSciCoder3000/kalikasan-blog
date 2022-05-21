import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { uploadToStorage } from '../firebase';


// component that converts outputs markdown
const EditorConvertToMarkdown = ({ onEditorChange, initialState, readOnly }) => {
    // calls the editor change event prop and outputs markdown data when editor state changes
    const onEditorStateChange = (editorState) => onEditorChange(
        draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
    )

    return (
        <div>
            <Editor
                defaultEditorState={initialState || ''}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={onEditorStateChange}
                readOnly={readOnly}
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'embedded', 'emoji', 'remove', 'history'],
                    image: { urlEnabled: false, uploadEnabled: false }
                }}
                />
        </div>
    )
}

export default EditorConvertToMarkdown