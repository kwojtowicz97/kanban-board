import React, { useState } from 'react'
import styles from './ProjectName.module.css'
import ContentEditable from 'react-contenteditable'

const ProjectName = () => {
  const [projectName, setProjectName] = useState('Project Name')
  return (
    <div className={styles.projectName}>
      <ContentEditable
        html={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      ></ContentEditable>
    </div>
  )
}

export default ProjectName
