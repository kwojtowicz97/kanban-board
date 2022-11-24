import React from 'react'
import FunnelIcon from '../Icons/FunnelIcon'
import styles from './Filter.module.css'

const Filter = () => {
  return (
    <div className={styles.filterButton}>
      <div className={styles.icon}>
        <FunnelIcon />
      </div>
    </div>
  )
}

export default Filter
