import React, { createContext, useContext, useState } from 'react'
import { KanbanContext, TTask } from './KanbanProvider'

import { DndProvider as DnDP } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

type TDnDContext = {
  dragged: TTask | null
  draggedOver: TTask | null
  setDragged: React.Dispatch<React.SetStateAction<TTask | null>> | null
  setDraggedOver: React.Dispatch<React.SetStateAction<TTask | null>> | null
}

type TDnDProviderProps = {
  children?: React.ReactNode
}

export const DnDContext = createContext<TDnDContext>({
  dragged: null,
  draggedOver: null,
  setDragged: null,
  setDraggedOver: null,
})

const DnDProvider = ({ children }: TDnDProviderProps) => {
  const [dragged, setDragged] = useState<TTask | null>(null)
  const [draggedOver, setDraggedOver] = useState<TTask | null>(null)
  const {} = useContext(KanbanContext)

  return (
    <DnDContext.Provider
      value={{
        dragged,
        setDragged,
        draggedOver,
        setDraggedOver,
      }}
    >
      <DnDP backend={HTML5Backend}>{children}</DnDP>
    </DnDContext.Provider>
  )
}

export default DnDProvider
