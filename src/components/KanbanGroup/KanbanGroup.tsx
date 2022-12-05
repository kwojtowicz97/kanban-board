import deepcopy from 'deepcopy'
import React, { useContext } from 'react'
import { DndContext, DndProvider } from 'react-dnd'
import DnDProvider, { DnDContext } from '../../providers/DnDProvider'
import { KanbanContext } from '../../providers/KanbanProvider'
import styles from './KanbanGroup.module.css'
import KanbanList from './KanbanList'

const KanbanGroup = () => {
  const { projects, currentProject } = useContext(KanbanContext)
  const { dragged, draggedOver } = useContext(DnDContext)

  const lists = projects.find(
    (project) => project.projectName === currentProject
  )?.lists

  if (!lists) throw new Error()

  // const filterLists = () => {
  //   const showedLists = deepcopy(lists)
  //   if (!dragged) return lists
  //   const draggedFromList = showedLists.find(
  //     (list) => list.badge === dragged?.list
  //   )
  //   if (!draggedFromList) return showedLists
  //   draggedFromList.tasks = draggedFromList.tasks.filter(
  //     (task) => task.title !== dragged?.title
  //   )

  //   if (!draggedOver) return showedLists

  //   const draggedToList = showedLists.find(
  //     (list) => list.badge === draggedOver?.list
  //   )

  //   if (!draggedToList) return showedLists

  //   draggedToList.tasks.push(dragged)

  //   return showedLists
  // }

  return (
    <div className={styles.group}>
      {lists.map((list) => (
        <KanbanList key={list.badge} list={list} />
      ))}
    </div>
  )
}

export default KanbanGroup
