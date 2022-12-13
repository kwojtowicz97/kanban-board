import React, { useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import {
  KanbanContext,
  priorityColors,
  TTask,
} from '../../providers/KanbanProvider'
import styles from './KanbanView.module.css'

type TTaskProps = {
  task: TTask
}

const Task = ({ task }: TTaskProps) => {
  const { dragAndDropHandler, setSelectedTask } = useContext(KanbanContext)

  const [{ isDragged }, drag] = useDrag({
    type: 'task',
    item: task,
    collect: (monitor) => {
      return {
        isDragged: monitor.isDragging(),
      }
    },
  })

  const [{ isHover }, drop] = useDrop({
    accept: 'task',
    drop: (item: TTask) => {
      dragAndDropHandler(item, task)
    },
    collect: (monitor) => {
      return {
        isHover: monitor.isOver(),
      }
    },
  })
  return drop(
    <div>
      {!isDragged ? (
        <div>
          {isHover ? (
            <div
              style={{ height: '71px' }}
              className={styles.placeholder}
            ></div>
          ) : null}
          <div
            ref={drag}
            onClick={() => setSelectedTask!(task)}
            className={styles.task}
          >
            <span>{task.title}</span>
            <div className={styles.taskDetails}>
              <div
                style={{ color: priorityColors[task.priority] }}
                className={styles.priority}
              >
                <i className='fa-solid fa-circle-exclamation'></i>
              </div>
              <div className={styles.date}>{task.date}</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Task
