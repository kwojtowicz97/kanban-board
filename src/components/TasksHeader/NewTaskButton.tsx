import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import styles from './NewTaskButton.module.css'

const NewTaskButton = () => {
  const { setIsNewTaskCardShown, getCurrentProject } = useContext(KanbanContext)
  const project = getCurrentProject()

  const isDisabled = project && !(project.lists.length > 0)

  const clickHandler = () => {
    if (isDisabled) return
    setIsNewTaskCardShown!(true)
  }
  return (
    <div
      onClick={clickHandler}
      className={[styles.button, isDisabled ? styles.disabled : null].join(' ')}
    >
      New task
    </div>
  )
}

export default NewTaskButton
