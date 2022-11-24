import React from 'react'
import Filter from './Filter'
import styles from './KanbanGroupHeader.module.css'
import NewTaskButton from './NewTaskButton'
import ViewSelect from './ViewSelect'

const KanbanGroupHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.rightMenu}>
        <ViewSelect />
        <NewTaskButton />
        <Filter />
      </div>
    </div>
  )
}

export default KanbanGroupHeader
