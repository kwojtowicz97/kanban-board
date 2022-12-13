import React from 'react'
import styles from './SidebarButton.module.css'

type TSidebarButtonProps = {
  projectName: string
  onClick: React.Dispatch<React.SetStateAction<string>>
  newTask?: boolean
}

const SidebarButton = ({
  projectName,
  onClick,
  newTask,
}: TSidebarButtonProps) => {
  return (
    <button
      onClick={() => onClick(projectName)}
      className={[styles.sidebarButton, newTask ? styles.newTask : null].join(
        ' '
      )}
    >
      {newTask ? (
        <i style={{ marginRight: '0.5rem' }} className='fa-solid fa-plus'></i>
      ) : null}
      {projectName}
    </button>
  )
}

export default SidebarButton
