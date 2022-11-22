import React from 'react'
import styles from './ProjectsList.module.css'

type TProjectsList = {
  children: React.ReactNode | React.ReactNode[]
}

const ProjectsList = ({ children }: TProjectsList) => {
  return <ul className={styles.projectsList}>{children}</ul>
}

export default ProjectsList
