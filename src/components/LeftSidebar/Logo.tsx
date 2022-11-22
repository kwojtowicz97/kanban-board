import React from 'react'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.gradientText}>
        <i className='fa-solid fa-list-check'></i>Kanban
      </span>
    </div>
  )
}

export default Logo
