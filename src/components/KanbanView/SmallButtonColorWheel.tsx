import React, { useContext } from 'react'
import { KanbanContext, TList } from '../../providers/KanbanProvider'
import ColorWheelIcon from '../Icons/ColorWheelIcon'
import ColorPicker from './ColorPicker'
import styles from './KanbanView.module.css'

type TSmallButtonColorWheelProps = {
  list: TList
}

const SmallButtonColorWheel = ({ list }: TSmallButtonColorWheelProps) => {
  const { toggleColorWheel } = useContext(KanbanContext)

  const clickHandler = () => {
    toggleColorWheel(list.badge)
  }
  return (
    <div
      className={[
        styles.button,
        list.isColorWheelShown ? styles.colorWheelShow : '',
      ].join(' ')}
    >
      <div
        onClick={clickHandler}
        className={`${styles.icon} ${styles.colorWheelGradient}`}
      >
        <ColorWheelIcon />
      </div>
      {list.isColorWheelShown ? (
        <>
          <div onClick={clickHandler} className={styles.backshadow}></div>
          <ColorPicker badge={list.badge} />
        </>
      ) : null}
    </div>
  )
}

export default SmallButtonColorWheel
