import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import styles from './NewTaskCard.module.css'

type TButtonsContainer = {
  addTaskHandler: () => void
}

const ButtonsContainer = ({ addTaskHandler }: TButtonsContainer) => {
  const { setIsNewTaskCardShown } = useContext(KanbanContext)
  const closeHandler = () => {
    setIsNewTaskCardShown!(false)
  }
  return (
    <div className={styles.buttons}>
      <button onClick={closeHandler}>Cancel</button>
      <button onClick={addTaskHandler} className={styles.addTask}>
        Add task
      </button>
    </div>
  )
}

export default ButtonsContainer
