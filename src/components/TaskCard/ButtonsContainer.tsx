import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import styles from './TaskCard.module.css'

type TButtonsContainer = { buttonText: string; closeHandler: () => void }

const ButtonsContainer = ({ buttonText, closeHandler }: TButtonsContainer) => {
  return (
    <div className={styles.buttons}>
      <button onClick={closeHandler}>Cancel</button>
      <button type={'submit'} className={styles.addTask}>
        {buttonText}
      </button>
    </div>
  )
}

export default ButtonsContainer
