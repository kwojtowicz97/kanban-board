import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import styles from './LeftSidebar.module.css'
import Logo from './Logo'
import ProjectsList from './ProjectsList'
import SidebarButton from './SidebarButton'

const LeftSidebar = () => {
  const { projects, setCurrentProject, addNewProject } =
    useContext(KanbanContext)
  return (
    <div className={styles.leftSidebar}>
      <Logo />
      <h2 className={styles.projectsListLabel}>Your projects</h2>
      <ProjectsList>
        {projects.map((project) => (
          <SidebarButton
            key={project.projectName}
            onClick={setCurrentProject!}
            projectName={project.projectName}
          />
        ))}
        <SidebarButton
          newTask
          key='new-task'
          onClick={addNewProject!}
          projectName='Add new project'
        />
      </ProjectsList>
    </div>
  )
}

export default LeftSidebar
