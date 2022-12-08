import { useContext, useState } from 'react'
import {
  KanbanContext,
  priorityColors,
  TTask,
} from '../../providers/KanbanProvider'
import { EditorState } from 'draft-js'

type FormData = {
  titleInput: string
  editorState: EditorState
  columnInput: string
  priorityInput: keyof typeof priorityColors
  dateInput: string
}

const useTaskFormData = (task?: TTask) => {
  const { projects, currentProject, addNewTask, updateTask } =
    useContext(KanbanContext)

  const currentProj = projects.find(
    (project) => project.projectName === currentProject
  )

  const [formData, setFormData] = useState<FormData>({
    titleInput: task?.title || '',
    editorState: task?.description || EditorState.createEmpty(),
    columnInput: task?.list || currentProj?.lists[0].badge || '',
    priorityInput: task?.priority || 'low',
    dateInput: task?.date || new Date().toISOString().substring(0, 10),
  })

  function handleEditorChange(editorState: EditorState) {
    setFormData({
      ...formData,
      editorState: editorState,
    })
  }

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return { formData, handleChange, handleEditorChange }
}

export default useTaskFormData
