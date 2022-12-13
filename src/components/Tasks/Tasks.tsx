import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import KanbanView from '../KanbanView/KanbanView'
import ListView from '../ListView/ListView'

export const Tasks = () => {
  const { isListView } = useContext(KanbanContext)
  return isListView ? <ListView /> : <KanbanView />
}
