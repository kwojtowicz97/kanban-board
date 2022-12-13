import React, { useContext, useState } from 'react'
import SmallButtonCollapse from './SmallButtonCollapse'
import styles from './KanbanView.module.css'
import SmallButtonColorWheel from './SmallButtonColorWheel'
import { KanbanContext, TList } from '../../providers/KanbanProvider'

type TTopBand = {
  list: TList
}

const TopBand = ({ list }: TTopBand) => {
  const { renameBagde } = useContext(KanbanContext)
  const [listName, setListName] = useState(list.badge)
  const blurHandler = () => {
    if (listName) {
      renameBagde(list.badge, listName)
    } else {
      setListName(list.badge)
    }
  }
  return (
    <div data-visible-on-hidden className={styles.band}>
      <div
        data-visible-on-hidden
        style={{ backgroundColor: list.badgeColor }}
        className={styles.bagde}
      >
        <input
          size={listName.replace(/\s+/g, '').length || 1}
          type='text'
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          onBlur={blurHandler}
        />{' '}
        ({list.tasks.length})
      </div>
      <div data-visible-on-hidden className={styles.rightButtonsGroup}>
        <SmallButtonCollapse list={list} data-visible-on-hidden />
        <SmallButtonColorWheel list={list} />
      </div>
    </div>
  )
}

export default TopBand
