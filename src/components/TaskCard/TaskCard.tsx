import { useContext, useRef } from 'react'
import {
  KanbanContext,
  priorityColors,
  TTask,
} from '../../providers/KanbanProvider'
import RichTextEditor from '../RichTextEditor/RichTextEditor'
import styles from './TaskCard.module.css'
import useTaskFormData from './useTaskFormData'
import { Form, InputField, SelectField } from './Form'

type TTaskCard = {
  task?: TTask
}

const TaskCard = ({ task }: TTaskCard) => {
  const { formData, handleChange, handleEditorChange } = useTaskFormData(task)

  const {
    projects,
    currentProject,
    addNewTask,
    updateTask,
    setIsNewTaskCardShown,
    setSelectedTask,
  } = useContext(KanbanContext)

  const currentProj = projects.find(
    (project) => project.projectName === currentProject
  )

  const addTaskHandler = () => {
    addNewTask(
      {
        title: formData.titleInput,
        description: formData.editorState,
        priority: formData.priorityInput,
        date: formData.dateInput,
        list: formData.columnInput,
      },
      formData.columnInput
    )
  }

  const updateTaskHandler = () => {
    updateTask(
      task!,
      {
        title: formData.titleInput,
        description: formData.editorState,
        priority: formData.priorityInput,
        date: formData.dateInput,
        list: formData.columnInput,
      },
      formData.columnInput
    )
  }

  const closeHandler = () => {
    setIsNewTaskCardShown!(false)
    setSelectedTask!(null)
  }

  return (
    <div className={styles.cardScreen}>
      <div className={styles.backshadow} />
      <div className={styles.card}>
        <Form
          submitHanddler={!!task ? updateTaskHandler : addTaskHandler}
          closeHandler={closeHandler}
          submitButtonText={!!task ? 'Update task' : 'Add task'}
        >
          <InputField
            type='text'
            name='titleInput'
            label='Task title'
            value={formData.titleInput}
            onChange={handleChange}
            required
          />
          <div className={[styles.inputGroup].join(' ')}>
            <label htmlFor='taks-name-input'>Task description</label>
            <RichTextEditor
              value={formData.editorState}
              onChange={handleEditorChange}
            />
          </div>
          <SelectField
            label='Column'
            name='columnInput'
            onChange={handleChange}
            value={formData.columnInput}
            required
            values={currentProj!.lists.map((list) => list.badge)}
          />
          <SelectField
            label='Priority'
            name='priorityInput'
            onChange={handleChange}
            value={formData.priorityInput}
            values={Object.keys(priorityColors)}
          />
          <InputField
            type='date'
            name='dateInput'
            label='Deadline'
            value={formData.dateInput}
            onChange={handleChange}
          />
        </Form>
      </div>
    </div>
  )
}

export default TaskCard
