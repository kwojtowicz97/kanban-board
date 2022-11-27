import React from 'react'
import styles from './KanbanGroup.module.css'
import Tasks from './Tasks'
import TopBand from './TopBand'

type TKanbanList = {
  badge: string
  badgeColor: string
}

const KanbanList = ({ badge, badgeColor }: TKanbanList) => {
  return (
    <div className={styles.list}>
      <TopBand badge={badge} badgeColor={badgeColor} />
      <Tasks />
    </div>
  )
}

export default KanbanList
