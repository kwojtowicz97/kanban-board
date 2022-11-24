import React from 'react'
import KanbanIcon from '../Icons/KanbanIcon'
import styles from './ViewSelect.module.css'
import ViewSelectButton from './ViewSelectButton'

const ViewSelect = () => {
  return (
    <label tabIndex={1} htmlFor={styles.viewSelect}>
      <div className={styles.wrapper}>
        <input id={styles.viewSelect} name='view-select' type='checkbox' />
        <ViewSelectButton
          id={styles.kanbanViewButton}
          icon={<KanbanIcon />}
          text='Kanban view'
        />
        <ViewSelectButton
          id={styles.checkedViewButton}
          icon={<KanbanIcon />}
          text='List view'
        />
      </div>
    </label>
  )
}

export default ViewSelect
