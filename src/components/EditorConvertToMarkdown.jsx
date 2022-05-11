import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorConvertToMarkdown = ({ onEditorChange, initialState, readOnly }) => {
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
                />
        </div>
    )
}

export default EditorConvertToMarkdown