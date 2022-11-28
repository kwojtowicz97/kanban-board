import React, { useContext } from 'react'
import { KanbanContext, TList } from '../../providers/KanbanProvider'
import CollapseIconAll from '../Icons/CollapseIconAll'
import styles from './KanbanGroup.module.css'

type TSmallButtonCollapseProps = {
  list: TList
}

const SmallButtonCollapse = ({ list }: TSmallButtonCollapseProps) => {
  const { toggleIsCollapsed } = useContext(KanbanContext)

  const clickHandler = () => {
    toggleIsCollapsed(list.badge)
  }

  return (
    <div
      onClick={clickHandler}
      data-visible-on-hidden
      className={[styles.button, list.isCollapsed ? styles.collapsed : ''].join(
        ' '
      )}
    >
      <div data-visible-on-hidden className={styles.icon}>
        <CollapseIconAll />
      </div>
    </div>
  )
}

export default SmallButtonCollapse
