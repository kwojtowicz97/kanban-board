import React, { useState } from 'react'
import { data } from '../data'

export enum Priority {
  LOW = 'green',
  MEDIUM = 'orange',
  HIGH = 'red',
}

export type TTask = {
  title: string
  description?: string
  priority: Priority
  date: string
}

export type TList = {
  badge: string
  badgeColor: string
  tasks: TTask[]
  isCollapsed: boolean
  isColorWheelShown: boolean
}

export type TProject = {
  projectName: string
  lists: TList[]
}

export type TKanbanContext = {
  projects: TProject[]
  currentProject: string
  setCurrentProject: React.Dispatch<React.SetStateAction<string>> | null
  toggleIsCollapsed: (badgeName: string) => void
  toggleColorWheel: (badgeName: string) => void
  setListColor: (badgeName: string, color: string) => void
  setProjectName: (projectName: string, newName: string) => void
  addNewTask: (newTask: TTask, badgeName: string) => void
  isNewTaskCardShown: boolean
  setIsNewTaskCardShown: React.Dispatch<React.SetStateAction<boolean>> | null
}

export const KanbanContext = React.createContext<TKanbanContext>({
  projects: [],
  currentProject: '',
  setCurrentProject: null,
  toggleIsCollapsed: (badgeName: string) => {},
  toggleColorWheel: (badgeName: string) => {},
  setListColor: (badgeName: string) => {},
  setProjectName: (projectName: string, newName: string) => {},
  addNewTask: (newTask: TTask, badgeName: string) => {},
  isNewTaskCardShown: false,
  setIsNewTaskCardShown: null,
})

type TKanbanProviderProps = {
  children?: React.ReactNode
}
const KanbanProvider = ({ children }: TKanbanProviderProps) => {
  const [currentProject, setCurrentProject] = useState('First project')
  const [projects, setProjects] = useState<TProject[]>(data)
  const [isNewTaskCardShown, setIsNewTaskCardShown] = useState(false)

  const toggleIsCollapsed = (badgeName: string) => {
    setProjects((projects) => {
      const currentProj = projects.find(
        (project) => project.projectName === currentProject
      )
      if (!currentProj) return projects
      const currentList = currentProj.lists.find(
        (list) => list.badge === badgeName
      )
      if (!currentList) return projects
      currentList.isCollapsed = !currentList.isCollapsed
      return [...projects]
    })
  }

  const toggleColorWheel = (badgeName: string) => {
    setProjects((projects) => {
      const currentProj = projects.find(
        (project) => project.projectName === currentProject
      )
      if (!currentProj) return projects
      const currentList = currentProj.lists.find(
        (list) => list.badge === badgeName
      )
      if (!currentList) return projects
      currentList.isColorWheelShown = !currentList.isColorWheelShown
      return [...projects]
    })
  }

  const setListColor = (badgeName: string, color: string) => {
    setProjects((projects) => {
      const currentProj = projects.find(
        (project) => project.projectName === currentProject
      )
      if (!currentProj) return projects
      const currentList = currentProj.lists.find(
        (list) => list.badge === badgeName
      )
      if (!currentList) return projects
      currentList.badgeColor = color
      return [...projects]
    })
  }

  const setProjectName = (projectName: string, newName: string) => {
    const tempName = `Project ${Math.random()}`
    setProjects((projects) => {
      const project = projects.find(
        (project) => project.projectName === projectName
      )
      if (!project) throw new Error()
      project.projectName = newName || tempName
      return [...projects]
    })
    setCurrentProject(newName || tempName)
  }

  const addNewTask = (newTask: TTask, badgeName: string) => {
    setProjects((projects) => {
      const currentProj = projects.find(
        (project) => project.projectName === currentProject
      )
      if (!currentProj) return projects
      const currentList = currentProj.lists.find(
        (list) => list.badge === badgeName
      )
      if (!currentList) return projects
      currentList.tasks.push(newTask)
      return [...projects]
    })
    setIsNewTaskCardShown!(false)
  }

  return (
    <KanbanContext.Provider
      value={{
        projects,
        currentProject,
        setCurrentProject,
        toggleIsCollapsed,
        toggleColorWheel,
        setListColor,
        setProjectName,
        addNewTask,
        isNewTaskCardShown,
        setIsNewTaskCardShown,
      }}
    >
      {children}
    </KanbanContext.Provider>
  )
}

export default KanbanProvider
