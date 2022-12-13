import React from 'react'
import ColorCircle from './ColorCircle'
import styles from './KanbanView.module.css'

type TColorPickerProps = {
  badge: string
}

const ColorPicker = ({ badge }: TColorPickerProps) => {
  return (
    <div className={styles.colorPicker}>
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
      <ColorCircle badge={badge} />
    </div>
  )
}

export default ColorPicker
