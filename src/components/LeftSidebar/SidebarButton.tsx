import React from 'react'
import styles from './SidebarButton.module.css'

type TSidebarButtonProps = {
  projectName: string
  onClick: React.Dispatch<React.SetStateAction<string>>
}

const SidebarButton = ({ projectName, onClick }: TSidebarButtonProps) => {
  return (
    <button
      onClick={() => onClick(projectName)}
      className={styles.sidebarButton}
    >
      {projectName}
    </button>
  )
}

export default SidebarButton
