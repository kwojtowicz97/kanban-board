import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { KanbanContext, Priority } from '../../providers/KanbanProvider'
import RichTextEditor from '../RichTextEditor/RichTextEditor'
import ButtonsContainer from './ButtonsContainer'
import styles from './NewTaskCard.module.css'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'

const NewTaskCard = () => {
  const { isNewTaskCardShown, projects, currentProject, addNewTask } =
    useContext(KanbanContext)

  const currentProj = projects.find(
    (project) => project.projectName === currentProject
  )

  const [titleInput, setTitleInput] = useState('')
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [columnInput, setColumnInput] = useState(
    currentProj?.lists[0].badge || ''
  )
  const [priorityInput, setPriorityInput] = useState(Priority.LOW)
  const [dateInput, setDateInput] = useState(
    new Date().toISOString().substring(0, 10)
  )
  const [formValidation, setFormValidation] = useState({
    titleInput: true,
    columnInput: true,
    priorityInput: true,
    dateInput: true,
  })
  const [invalidFlash, setInvalidFlash] = useState(false)

  useEffect(() => {
    if (invalidFlash) setTimeout(() => setInvalidFlash(false), 500)
    document.getElementById('titleInput')?.focus()
  }, [invalidFlash])

  useEffect(() => {
    setFormValidation({
      titleInput: !!titleInput,
      columnInput: !!columnInput,
      priorityInput: !!priorityInput,
      dateInput: !!dateInput,
    })
  }, [titleInput, columnInput, priorityInput, dateInput])

  const addTaskHandler = () => {
    if (Object.values(formValidation).some((b) => !b)) {
      setInvalidFlash(true)
      return
    }
    addNewTask(
      {
        title: titleInput,
        description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        priority: priorityInput,
        date: dateInput,
      },
      columnInput
    )
  }

  const titleInputChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTitleInput(e.target.value)
  }

  const columnInputChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setColumnInput(e.target.value)
  }

  const priorityInputChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPriorityInput(e.target.value as Priority)
  }

  const dateInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateInput(e.target.value)
  }

  return isNewTaskCardShown ? (
    <div className={styles.cardScreen}>
      <div className={styles.backshadow}></div>
      <div className={styles.card}>
        <div className={styles.title}>
          <div className={styles.titleText}>New task</div>
        </div>
        <div className={styles.fromContainer}>
          <div className={styles.formWrapper}>
            <form className={styles.newTaskForm}>
              <div className={styles.inputGroup}>
                <label htmlFor='titleInput'>Task title</label>
                <textarea
                  required
                  className={
                    !formValidation.titleInput && invalidFlash && styles.invalid
                  }
                  id='titleInput'
                  value={titleInput}
                  onChange={titleInputChangeHandler}
                />
              </div>
              <div className={[styles.inputGroup].join(' ')}>
                <label htmlFor='taks-name-input'>Task description</label>
                <RichTextEditor
                  editorState={editorState}
                  setEditorState={setEditorState}
                />
              </div>
              <div className={[styles.inputGroup].join(' ')}>
                <label htmlFor='taks-name-input'>Column</label>
                <select
                  className={
                    !formValidation.columnInput &&
                    invalidFlash &&
                    styles.invalid
                  }
                  value={columnInput}
                  onChange={columnInputChangeHandler}
                >
                  {currentProj?.lists.map((list) => (
                    <option value={list.badge}>{list.badge}</option>
                  ))}
                </select>
              </div>
              <div className={[styles.inputGroup].join(' ')}>
                <label htmlFor='taks-name-input'>Priority</label>
                <select
                  className={
                    !formValidation.priorityInput &&
                    invalidFlash &&
                    styles.invalid
                  }
                  value={priorityInput}
                  onChange={priorityInputChangeHandler}
                  style={{ textTransform: 'capitalize' }}
                >
                  {(Object.keys(Priority) as (keyof typeof Priority)[]).map(
                    (priority) => (
                      <option value={Priority[priority]}>
                        {priority.toLocaleLowerCase()}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className={[styles.inputGroup].join(' ')}>
                <label htmlFor='taks-name-input'>Deadline</label>
                <input
                  className={
                    !formValidation.dateInput && invalidFlash && styles.invalid
                  }
                  value={dateInput}
                  onChange={dateInputChangeHandler}
                  type='date'
                />
              </div>
            </form>
          </div>
        </div>
        <ButtonsContainer addTaskHandler={addTaskHandler} />
      </div>
    </div>
  ) : null
}

export default NewTaskCard
