import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import styles from './ProjectName.module.css'
import WarningTooltip from './WarningTooltip'

const PLACEHOLDER = 'Your project name'

const ProjectName = () => {
  const { setProjectName, currentProject, projects, projectNameRef } =
    useContext(KanbanContext)
  const [projectNameInput, setProjectNameInput] =
    useState<string>(currentProject)

  const [isNameExists, setIsNameExists] = useState(false)

  const blurHandler = () => {
    if (currentProject === projectNameInput) return
    if (projects.some((project) => project.projectName === projectNameInput)) {
      setProjectNameInput(currentProject)
      setIsNameExists(true)
      return
    }

    setProjectName(currentProject, projectNameInput)
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (currentProject === projectNameInput) return
    if (projects.some((project) => project.projectName === projectNameInput)) {
      setProjectNameInput(currentProject)
      setIsNameExists(true)
      return
    }

    setProjectName(currentProject, projectNameInput)
  }

  useEffect(() => {
    setProjectNameInput(currentProject)
  }, [currentProject])

  useEffect(() => {
    if (isNameExists) {
      setTimeout(() => setIsNameExists(false), 2500)
    }
  }, [isNameExists])

  return (
    <form onSubmit={submitHandler}>
      <input
        ref={projectNameRef}
        placeholder={PLACEHOLDER}
        id='project-name'
        className={styles.projectName}
        size={
          projectNameInput
            ? Math.max(projectNameInput.length, 2)
            : PLACEHOLDER.length
        }
        type='text'
        value={projectNameInput}
        onBlur={blurHandler}
        onChange={(e) => {
          setProjectNameInput(e.target.value)
        }}
      />
      {isNameExists ? <WarningTooltip /> : null}
    </form>
  )
}

export default ProjectName
