import React from 'react'
import ProjectName from './ProjectName'
import styles from './TopNavbar.module.css'

const TopNavbar = () => {
  return (
    <div className={styles.topNavbar}>
      <div className={styles.leftControls}>
        <ProjectName />
      </div>
      <div className={styles.rightControls}></div>
    </div>
  )
}

export default TopNavbar
