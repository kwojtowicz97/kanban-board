import React from 'react'
import styles from './KanbanGroup.module.css'
import KanbanList from './KanbanList'

const KanbanGroup = () => {
  return (
    <div className={styles.group}>
      <KanbanList badgeColor='#5ca05c' badge='Open' />
      <KanbanList badgeColor='#0daee9' badge='In progress' />
      <KanbanList badgeColor='#8dbabb' badge='Testing' />
    </div>
  )
}

export default KanbanGroup
