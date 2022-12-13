import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import styles from './KanbanView.module.css'

type TColorCircleProps = {
  badge: string
  color: string
}

const ColorCircle = ({ badge, color }: TColorCircleProps) => {
  const { setListColor } = useContext(KanbanContext)

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
