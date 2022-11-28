import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import styles from './KanbanGroup.module.css'

type TColorCircleProps = {
  badge: string
}

const ColorCircle = ({ badge }: TColorCircleProps) => {
  const { setListColor } = useContext(KanbanContext)
  const color = '#' + Math.floor(Math.random() * 4096).toString(16)

  const clickHandler = () => {
    setListColor(badge, color)
  }

  return (
    <div
      onClick={clickHandler}
      style={{
        background: color,
      }}
      className={styles.colorCircle}
    ></div>
  )
}

export default ColorCircle
