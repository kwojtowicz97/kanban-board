import React from 'react'
import ColorCircle from './ColorCircle'
import styles from './KanbanView.module.css'

type TColorPickerProps = {
  badge: string
}

export const colors = [
  '#e6194B',
  '#3cb44b',
  '#ffe119',
  '#4363d8',
  '#f58231',
  '#911eb4',
  '#42d4f4',
  '#f032e6',
  '#bfef45',
  '#fabed4',
  '#469990',
  '#dcbeff',
  '#9A6324',
  '#fffac8',
  '#800000',
  '#aaffc3',
  '#808000',
  '#ffd8b1',
  '#000075',
  '#a9a9a9',
]

const ColorPicker = ({ badge }: TColorPickerProps) => {
  return (
    <div className={styles.colorPicker}>
      {colors.map((color) => (
        <ColorCircle badge={badge} color={color} />
      ))}
    </div>
  )
}

export default ColorPicker
