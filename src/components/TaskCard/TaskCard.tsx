import React, { useContext } from 'react'
import {
  KanbanContext,
  priorityColors,
  TTask,
} from '../../providers/KanbanProvider'
import styles from './TaskCard.module.css'
import useTaskFormData from './useTaskFormData'
import { Form, InputField, RichTextEditorField, SelectField } from './Form'

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

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      title: formData.titleInput,
      description: formData.editorState,
      priority: formData.priorityInput,
      date: formData.dateInput,
      list: formData.columnInput,
    }
    !!task
      ? updateTask(task!, data, formData.columnInput)
      : addNewTask(data, formData.columnInput)
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
          submitHandler={submitHandler}
          closeHandler={closeHandler}
          submitButtonText={!!task ? 'Update task' : 'Add task'}
          task={task}
        >
          <InputField
            type='text'
            name='titleInput'
            label='Task title'
            value={formData.titleInput}
            onChange={handleChange}
            required
          />
          <RichTextEditorField
            label='Task description'
            name='descriptionInput'
            onChange={handleEditorChange}
            value={formData.editorState}
          />
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
