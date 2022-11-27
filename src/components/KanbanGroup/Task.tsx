import React from 'react'
import styles from './KanbanGroup.module.css'

const Task = () => {
  return (
    <div
      onDrag={() => console.log('gragging')}
      draggable
      className={styles.task}
    >
      <span>Multiple users can be owners of the same task.</span>
      <div className={styles.taskDetails}>
        <div className={styles.priority}>
          <i className='fa-solid fa-circle-exclamation'></i>
        </div>
        <div className={styles.date}>26-11-2022</div>
      </div>
    </div>
  )
}

export default Task
