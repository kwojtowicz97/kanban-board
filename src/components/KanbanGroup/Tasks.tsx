import React from 'react'
import { TTask } from '../../providers/KanbanProvider'
import styles from './KanbanGroup.module.css'
import Task from './Task'

type TTasksProps = {
  tasks: TTask[]
}

const Tasks = ({ tasks }: TTasksProps) => {
  return (
    <div className={styles.tasks}>
      {tasks.map((task) => (
        <Task key={task.title} task={task} />
      ))}
    </div>
  )
}

export default Tasks
