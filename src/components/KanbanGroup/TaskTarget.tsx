import React, { useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { DnDContext } from '../../providers/DnDProvider'
import { KanbanContext, TList, TTask } from '../../providers/KanbanProvider'
import styles from './KanbanGroup.module.css'

type TTaskTargerProps = {
  list: TList
}

const TaskTarget = ({ list }: TTaskTargerProps) => {
  const { pushToList } = useContext(KanbanContext)

  const [{ isHover }, drop] = useDrop({
    accept: 'task',
    drop: (item: TTask) => {
      pushToList(list.badge, item)
    },
    collect: (monitor) => {
      return {
        isHover: monitor.isOver(),
      }
    },
  })
  return (
    <>
      {drop(
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
          }}
        >
          {isHover ? (
            <div
              style={{ height: '71px' }}
              className={styles.placeholder}
            ></div>
          ) : null}
          <div
            style={{ flex: '1 1 auto', visibility: 'hidden' }}
            className={styles.task}
          ></div>
        </div>
      )}
    </>
  )
}

export default TaskTarget
