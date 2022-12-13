import React from 'react'
import styles from './KanbanView.module.css'

const WarningTooltip = () => {
  return (
    <div className={styles.warningTooltip}>
      Two lists can't have the same name
    </div>
  )
}

export default WarningTooltip
