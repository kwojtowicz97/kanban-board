import React from 'react'
import { TList } from '../../providers/KanbanProvider'
import styles from './KanbanView.module.css'
import Task from './Task'
import TaskTarget from './TaskTarget'

type TTasksProps = {
  list: TList
}

const Tasks = ({ list }: TTasksProps) => {
  return (
    <div className={styles.tasks}>
      {list.tasks.map((task) => (
        <Task key={task.title} task={task} />
      ))}
      <TaskTarget list={list} />
    </div>
  )
}

export default Tasks
