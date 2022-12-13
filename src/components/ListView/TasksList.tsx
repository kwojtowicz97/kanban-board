import React from 'react'
import { TTask } from '../../providers/KanbanProvider'
import styles from './ListView.module.css'
import Task from './Task'

type TTasksList = {
  tasks: TTask[]
}

const TasksList = ({ tasks }: TTasksList) => {
  return (
    <ul className={styles.tasksList}>
      {tasks.map((task) => (
        <li>
          <Task task={task} />
        </li>
      ))}
    </ul>
  )
}

export default TasksList
