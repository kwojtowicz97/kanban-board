import React from 'react'
import styles from './LeftSidebar.module.css'
import Logo from './Logo'
import ProjectsList from './ProjectsList'
import SidebarButton from './SidebarButton'

const LeftSidebar = () => {
  return (
    <div className={styles.leftSidebar}>
      {/* <div className={styles.hideButton}>&#60;</div> */}
      <Logo />
      <h2 className={styles.projectsListLabel}>Your projects</h2>
      <ProjectsList>
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
      </ProjectsList>
    </div>
  )
}

export default LeftSidebar
