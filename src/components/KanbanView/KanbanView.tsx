import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import styles from './KanbanView.module.css'
import KanbanList from './KanbanList'

const KanbanView = () => {
  const { projects, currentProject } = useContext(KanbanContext)

  const lists = projects.find(
    (project) => project.projectName === currentProject
  )?.lists

  if (!lists) throw new Error()

  return (
    <div className={styles.group}>
      {lists.map((list) => (
        <KanbanList key={list.badge} list={list} />
      ))}
    </div>
  )
}

export default KanbanView
