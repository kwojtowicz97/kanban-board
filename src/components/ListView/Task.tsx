import React, { useContext } from 'react'
import {
  KanbanContext,
  priorityColors,
  TTask,
} from '../../providers/KanbanProvider'
import styles from './ListView.module.css'

type TTaskProps = {
  task: TTask
}

const Task = ({ task }: TTaskProps) => {
  const { setSelectedTask, getCurrentProject } = useContext(KanbanContext)
  const project = getCurrentProject()
  const color =
    project?.lists.find((list) => list.badge === task.list)?.badgeColor ||
    '#fff'

  return (
    <div onClick={() => setSelectedTask!(task)} className={styles.task}>
      <div>{task.title}</div>
      <div className={styles.rightSide}>
        <div style={{ background: color }} className={styles.bagde}>
          {task.list}
        </div>
        <div className={styles.date}>{task.date}</div>
        <div
          style={{ color: priorityColors[task.priority] }}
          className={styles.priority}
        >
          <i className='fa-solid fa-circle-exclamation'></i>
        </div>
      </div>
    </div>
  )
}

export default Task
