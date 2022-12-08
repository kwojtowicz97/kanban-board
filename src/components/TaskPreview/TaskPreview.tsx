import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import TaskCard from '../TaskCard/TaskCard'

const TaskPreview = () => {
  const { selectedTask } = useContext(KanbanContext)
  return selectedTask ? <TaskCard task={selectedTask} /> : null
}

export default TaskPreview
