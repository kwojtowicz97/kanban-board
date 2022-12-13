import React from 'react'
import styles from './KanbanView.module.css'

const AddListCard = () => {
  return (
    <div className={[styles.list, styles.newList].join(' ')}>
      <div className={styles.centerContent}>
        <div className={styles.wrapper}>
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
