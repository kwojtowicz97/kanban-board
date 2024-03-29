import React from 'react'
import { TList } from '../../providers/KanbanProvider'
import styles from './KanbanView.module.css'
import Tasks from './Tasks'
import TopBand from './TopBand'

type TKanbanList = {
  list: TList
}

const KanbanList = ({ list }: TKanbanList) => {
  return (
    <div className={styles.list}>
      <TopBand list={list} />
      <Tasks list={list} />
    </div>
  )
}

export default KanbanList
