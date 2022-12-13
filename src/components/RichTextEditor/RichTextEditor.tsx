import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from './RichTextEditor.module.css'

type TRichTextEditorProps = {
  value: EditorState
  onChange: (editorState: EditorState) => void
}

const RichTextEditor = ({ value, onChange }: TRichTextEditorProps) => {
  return (
    <Editor
      editorState={value}
      wrapperClassName={styles.wrapper}
      editorClassName={styles.editor}
      toolbarClassName={styles.toolbar}
      onEditorStateChange={onChange}
    />
  )
}

export default RichTextEditor
