import React from 'react'
import styles from './KanbanGroup.module.css'
import Task from './Task'

const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <Task />
      <Task />
      <Task />
    </div>
  )
}

export default Tasks
