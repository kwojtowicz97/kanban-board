import React from 'react'
import styles from './ProjectsList.module.css'
import SidebarButton from './SidebarButton'

type TProjectsList = {
  children: React.ReactNode | React.ReactNode[]
}

const ProjectsList = ({ children }: TProjectsList) => {
  return <ul className={styles.projectsList}>{children}</ul>
}

export default ProjectsList
