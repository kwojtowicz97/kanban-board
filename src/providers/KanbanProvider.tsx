import React, { Dispatch, SetStateAction, useState } from 'react'
import { data } from '../data'
import { EditorState } from 'draft-js'

export const priorityColors = {
  low: 'green',
  medium: 'orange',
  high: 'red',
}

export type TTask = {
  title: string
  description?: EditorState
  priority: keyof typeof priorityColors
  date: string
  list: string
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
  updateTask: (oldTask: TTask, newTask: TTask, badgeName: string) => void
  isNewTaskCardShown: boolean
  setIsNewTaskCardShown: React.Dispatch<React.SetStateAction<boolean>> | null
  dragAndDropHandler: (dragged: TTask, draggedOver: TTask) => void
  pushToList: (badge: string, item: TTask) => void
  selectedTask: TTask | null
  setSelectedTask: Dispatch<SetStateAction<TTask | null>> | null
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
  updateTask: (oldTask: TTask, newTask: TTask, badgeName: string) => {},
  isNewTaskCardShown: false,
  setIsNewTaskCardShown: null,
  dragAndDropHandler: (dragged: TTask, draggedOver: TTask) => {},
  pushToList: (badge: string, item: TTask) => {},
  selectedTask: null,
  setSelectedTask: null,
})

type TKanbanProviderProps = {
  children?: React.ReactNode
}
const KanbanProvider = ({ children }: TKanbanProviderProps) => {
  const [currentProject, setCurrentProject] = useState('First project')
  const [projects, setProjects] = useState<TProject[]>(data)
  const [isNewTaskCardShown, setIsNewTaskCardShown] = useState(false)
  const [selectedTask, setSelectedTask] = useState<TTask | null>(null)

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

  const updateTask = (oldTask: TTask, newTask: TTask, badgeName: string) => {
    const currentProj = projects.find(
      (project) => project.projectName === currentProject
    )
    if (!currentProj) return projects
    const currentList = currentProj.lists.find(
      (list) => list.badge === oldTask.list
    )
    if (!currentList) return projects
    if (oldTask.list === newTask.list) {
      setProjects((projects) => {
        currentList.tasks = currentList?.tasks.map((task) =>
          task.title === oldTask.title ? newTask : task
        )

        return [...projects]
      })
    } else {
      setProjects((projects) => {
        currentList.tasks = currentList.tasks.filter(
          (task) => task.title !== oldTask.title
        )
        console.log(currentList)
        console.log(projects)
        return [...projects]
      })
      addNewTask(newTask, badgeName)
    }

    setSelectedTask(null)
  }

  const dragAndDropHandler = (dragged: TTask, draggedOver: TTask) => {
    setProjects((state) => {
      // debugger
      if (dragged === draggedOver) return state

      const currentProj = state.find(
        (proj) => proj.projectName === currentProject
      )

      if (!currentProj) return state

      const draggedFromList = currentProj.lists.find(
        (list) => list.badge === dragged.list
      )

      const draggedOverList = currentProj.lists.find(
        (list) => list.badge === draggedOver.list
      )

      if (!draggedFromList || !draggedOverList) return state

      const draggedObj = draggedFromList.tasks.find(
        (task) => task.title === dragged.title
      )

      const draggedOverObj = draggedOverList.tasks.find(
        (task) => task.title === draggedOver.title
      )

      if (!draggedObj || !draggedOverObj) return state

      draggedObj.list = draggedOverList.badge

      draggedFromList.tasks = draggedFromList.tasks.filter(
        (task) => task.title !== dragged.title
      )

      const index = draggedOverList.tasks.indexOf(draggedOverObj)

      console.log(index)

      draggedOverList.tasks = draggedOverList.tasks.filter(
        (task) => task.title !== dragged.title
      )

      draggedOverList.tasks.splice(index, 0, dragged)

      return [...state]
    })
  }

  const pushToList = (badge: string, item: TTask) => {
    setProjects((state) => {
      // debugger
      const currentProj = state.find(
        (proj) => proj.projectName === currentProject
      )

      if (!currentProj) return state

      const draggedFromList = currentProj.lists.find(
        (list) => list.badge === item.list
      )

      const draggedOverList = currentProj.lists.find(
        (list) => list.badge === badge
      )

      if (!draggedFromList || !draggedOverList) return state

      const draggedObj = draggedFromList.tasks.find(
        (task) => task.title === item.title
      )

      if (!draggedObj) return state

      draggedObj.list = draggedOverList.badge

      draggedFromList.tasks = draggedFromList.tasks.filter(
        (task) => task.title !== item.title
      )

      draggedOverList.tasks = draggedOverList.tasks.filter(
        (task) => task.title !== item.title
      )

      draggedOverList.tasks.push(item)

      return [...state]
    })
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
        updateTask,
        isNewTaskCardShown,
        setIsNewTaskCardShown,
        dragAndDropHandler,
        pushToList,
        selectedTask,
        setSelectedTask,
      }}
    >
      {children}
    </KanbanContext.Provider>
  )
}

export default KanbanProvider
