import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorConvertToMarkdown = ({ onEditorChange }) => {
    const onEditorStateChange = (editorState) => onEditorChange(
        draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
    )

    return (
        <div>
            <Editor
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={onEditorStateChange}
                />
        </div>
    )
}

export default EditorConvertToMarkdown