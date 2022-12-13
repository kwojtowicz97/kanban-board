import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import styles from './NewTaskButton.module.css'

const NewTaskButton = () => {
  const { setIsNewTaskCardShown } = useContext(KanbanContext)
  const clickHandler = () => {
    setIsNewTaskCardShown!(true)
  }
  return (
    <div onClick={clickHandler} className={styles.button}>
      New task
    </div>
  )
}

export default NewTaskButton
