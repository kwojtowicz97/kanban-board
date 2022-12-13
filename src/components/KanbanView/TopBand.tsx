import React from 'react'
import SmallButtonCollapse from './SmallButtonCollapse'
import styles from './KanbanView.module.css'
import SmallButtonColorWheel from './SmallButtonColorWheel'
import { TList } from '../../providers/KanbanProvider'

type TTopBand = {
  list: TList
}

const TopBand = ({ list }: TTopBand) => {
  return (
    <div data-visible-on-hidden className={styles.band}>
      <div
        data-visible-on-hidden
        style={{ backgroundColor: list.badgeColor }}
        className={styles.bagde}
      >
        {`${list.badge} (${list.tasks.length})`}
      </div>
      <div data-visible-on-hidden className={styles.rightButtonsGroup}>
        <SmallButtonCollapse list={list} data-visible-on-hidden />
        <SmallButtonColorWheel list={list} />
      </div>
    </div>
  )
}

export default TopBand
