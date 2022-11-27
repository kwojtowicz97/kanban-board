import React from 'react'
import CollapseIconAll from '../Icons/CollapseIconAll'
import styles from './KanbanGroup.module.css'

const SmallButtonCollapse = () => {
  const id = String(Math.random())
  return (
    <label data-visible-on-hidden htmlFor={id} className={styles.button}>
      <input
        data-visible-on-hidden
        id={id}
        className={styles.collapseInput}
        type='checkbox'
      />
      <div data-visible-on-hidden className={styles.icon}>
        <CollapseIconAll />
      </div>
    </label>
  )
}

export default SmallButtonCollapse
