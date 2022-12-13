import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import styles from './KanbanView.module.css'

const AddListCard = () => {
  const { addNewList } = useContext(KanbanContext)
  return (
    <div className={[styles.list, styles.newList].join(' ')}>
      <div className={styles.centerContent}>
        <div onClick={addNewList} className={styles.wrapper}>
          <div className={styles.addIcon}>
            <i className='fa-regular fa-square-plus'></i>
          </div>
          <div>Add new list</div>
        </div>
      </div>
    </div>
  )
}

export default AddListCard
