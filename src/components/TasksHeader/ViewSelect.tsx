import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import KanbanIcon from '../Icons/KanbanIcon'
import styles from './ViewSelect.module.css'

const ViewSelect = () => {
  const { isListView, setIsListView } = useContext(KanbanContext)

  const clickHandler = () => {
    setIsListView!((state) => !state)
  }

  return (
    <div onClick={clickHandler} className={styles.wrapper}>
      <div className={styles.viewSelectButton}>
        <span className={styles.icon}>
          <KanbanIcon isListView={isListView} />
        </span>
        <span>{!isListView ? 'List view' : 'Kanban View'}</span>
      </div>
    </div>
  )
}

export default ViewSelect
