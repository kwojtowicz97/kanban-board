import React from 'react'
import SmallButtonCollapse from './SmallButtonCollapse'
import styles from './KanbanGroup.module.css'
import SmallButtonColorWheel from './SmallButtonColorWheel'

type TTopBand = {
  badge: string
  badgeColor: string
}

const TopBand = ({ badge, badgeColor }: TTopBand) => {
  return (
    <div data-visible-on-hidden className={styles.band}>
      <div
        data-visible-on-hidden
        style={{ backgroundColor: badgeColor }}
        className={styles.bagde}
      >
        {badge}
      </div>
      <div data-visible-on-hidden className={styles.rightButtonsGroup}>
        <SmallButtonCollapse data-visible-on-hidden />
        <SmallButtonColorWheel />
      </div>
    </div>
  )
}

export default TopBand
