import React, { useState } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
// @ts-ignore
import draftToHtml from 'draftjs-to-html'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from './RichTextEditor.module.css'

type TRichTextEditorProps = {
  editorState: EditorState
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
}

const RichTextEditor = ({
  editorState,
  setEditorState,
}: TRichTextEditorProps) => {
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
  }

  console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))

  return (
    <Editor
      editorState={editorState}
      wrapperClassName={styles.wrapper}
      editorClassName={styles.editor}
      toolbarClassName={styles.toolbar}
      onEditorStateChange={onEditorStateChange}
    />
  )
}

export default RichTextEditor
