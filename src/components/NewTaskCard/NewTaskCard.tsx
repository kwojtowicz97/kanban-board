import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import TaskCard from '../TaskCard/TaskCard'

const NewTaskCard = () => {
  const { isNewTaskCardShown } = useContext(KanbanContext)
  return isNewTaskCardShown ? <TaskCard /> : null
}

export default NewTaskCard
