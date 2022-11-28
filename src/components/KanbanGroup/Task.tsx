import React from 'react'
import { TTask } from '../../providers/KanbanProvider'
import styles from './KanbanGroup.module.css'

type TTaskProps = {
  task: TTask
}

const Task = ({ task }: TTaskProps) => {
  return (
    <div className={styles.task}>
      <span>{task.title}</span>
      <div className={styles.taskDetails}>
        <div style={{ color: task.priority }} className={styles.priority}>
          <i className='fa-solid fa-circle-exclamation'></i>
        </div>
        <div className={styles.date}>{task.date}</div>
      </div>
    </div>
  )
}

export default Task
