import React from 'react'
import CollapseIconAll from '../Icons/CollapseIconAll'
import ColorWheelIcon from '../Icons/ColorWheelIcon'
import ColorPicker from './ColorPicker'
import styles from './KanbanGroup.module.css'

const SmallButtonColorWheel = () => {
  return (
    <label htmlFor={styles.colorPickerInput} className={styles.button}>
      <div className={`${styles.icon} ${styles.colorWheelGradient}`}>
        <ColorWheelIcon />
      </div>
      <input id={styles.colorPickerInput} type='checkbox' />
      <ColorPicker />
    </label>
  )
}

export default SmallButtonColorWheel
