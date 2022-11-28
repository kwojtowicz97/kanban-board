import React from 'react'
import styles from './ProjectName.module.css'

const WarningTooltip = () => {
  return (
    <div className={styles.warningTooltip}>
      Two projects can't have the same name
    </div>
  )
}

export default WarningTooltip
