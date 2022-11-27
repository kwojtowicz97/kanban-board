import React, { useState } from 'react'
import styles from './ProjectName.module.css'

const PLACEHOLDER = 'Your project name'

const ProjectName = () => {
  const [projectName, setProjectName] = useState('Project Name')

  return (
    <input
      placeholder={PLACEHOLDER}
      className={styles.projectName}
      size={projectName ? Math.max(projectName.length, 2) : PLACEHOLDER.length}
      type='text'
      value={projectName}
      onChange={(e) => setProjectName(e.target.value)}
    />
  )
}

export default ProjectName
