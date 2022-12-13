import React, { useContext } from 'react'
import {
  KanbanContext,
  priorityColors,
  TSortBy,
  TTask,
} from '../../providers/KanbanProvider'
import styles from './ListView.module.css'
import TasksList from './TasksList'

const ListView = () => {
  const { getCurrentProject, sortBy, reverseSort, filters } =
    useContext(KanbanContext)

  const project = getCurrentProject()
  const tasks = project?.lists.map((list) => list.tasks).flat()

  if (!tasks) return <p>No tasks found</p>

  let filteredTasks = [...tasks]

  if (filters.filteredLists.length > 0) {
    filteredTasks = filteredTasks.filter((task) =>
      filters.filteredLists.includes(task.list)
    )
  }

  if (filters.filteredStartDate) {
    filteredTasks = filteredTasks.filter(
      (task) =>
        new Date(task.date).getTime() -
          new Date(filters.filteredStartDate).getTime() >
        0
    )
  }

  if (filters.filteredEndDate) {
    filteredTasks = filteredTasks.filter(
      (task) =>
        new Date(task.date).getTime() -
          new Date(filters.filteredEndDate).getTime() <
        0
    )
  }

  if (filters.filteredPriority.length > 0) {
    filteredTasks = filteredTasks.filter((task) =>
      filters.filteredPriority.includes(task.priority)
    )
  }

  const sortedTasks: { [key in TSortBy]: TTask[] } = {
    title: [...filteredTasks].sort((a, b) =>
      a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase())
    ),
    date: [...filteredTasks].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    ),
    list: [...filteredTasks].sort((a, b) => a.list.localeCompare(b.list)),
    prority: [...filteredTasks].sort(
      (a, b) =>
        Object.keys(priorityColors).indexOf(a.priority) -
        Object.keys(priorityColors).indexOf(b.priority)
    ),
  }

  console.log(sortedTasks, sortBy)

  return (
    <div className={styles.group}>
      <TasksList
        tasks={
          reverseSort ? sortedTasks[sortBy].reverse() : sortedTasks[sortBy]
        }
      />
    </div>
  )
}

export default ListView
