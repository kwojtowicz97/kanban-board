import React, { useContext, useEffect, useState } from 'react'
import SmallButtonCollapse from './SmallButtonCollapse'
import styles from './KanbanView.module.css'
import SmallButtonColorWheel from './SmallButtonColorWheel'
import { KanbanContext, TList } from '../../providers/KanbanProvider'
import WarningTooltip from './WarningTooltip'

type TTopBand = {
  list: TList
}

const TopBand = ({ list }: TTopBand) => {
  const { renameBagde, getCurrentProject } = useContext(KanbanContext)
  const [listName, setListName] = useState(list.badge)
  const [isNameExists, setIsNameExists] = useState(false)
  const blurHandler = () => {
    if (
      listName &&
      !getCurrentProject()?.lists.some((list) => list.badge === listName)
    ) {
      renameBagde(list.badge, listName)
    } else {
      setListName(list.badge)
      setIsNameExists(true)
    }
  }

  useEffect(() => {
    if (isNameExists) {
      setTimeout(() => setIsNameExists(false), 2500)
    }
  }, [isNameExists])

  return (
    <>
      <div data-visible-on-hidden className={styles.band}>
        <div
          data-visible-on-hidden
          style={{ backgroundColor: list.badgeColor }}
          className={styles.bagde}
        >
          <input
            data-visible-on-hidden
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
      {isNameExists ? <WarningTooltip /> : null}
    </>
  )
}

export default TopBand
