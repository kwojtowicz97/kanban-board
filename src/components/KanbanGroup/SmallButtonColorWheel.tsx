import React from 'react'
import ColorWheelIcon from '../Icons/ColorWheelIcon'
import styles from './KanbanGroup.module.css'

const SmallButtonColorWheel = () => {
  return (
    <div className={styles.button}>
      <div className={`${styles.icon} ${styles.colorWheelGradient}`}>
        <ColorWheelIcon />
      </div>
    </div>
  )
}

export default SmallButtonColorWheel
