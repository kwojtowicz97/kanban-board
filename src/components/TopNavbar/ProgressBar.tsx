import { paste } from '@testing-library/user-event/dist/paste'
import React, { useContext, useState } from 'react'
import { KanbanContext, TTask } from '../../providers/KanbanProvider'
import styles from './ProgressBar.module.css'

const ProgressBar = () => {
  const { projects, currentProject } = useContext(KanbanContext)
  const [progress, setProgress] = useState(0)

  const currentProj = projects.find(
    (proj) => proj.projectName === currentProject
  )

  if (!currentProj) throw new Error()

  const allTasks = currentProj.lists.reduce<TTask[]>(
    (prev, curr) => prev.concat(curr.tasks),
    []
  )

  const noOfLists = currentProj.lists.length

  const finishedTasks = currentProj.lists[noOfLists - 1].tasks.length

  if (finishedTasks / allTasks.length - progress > 0.005) {
    setTimeout(() => setProgress((state) => state + 0.002), 5)
  } else if (finishedTasks / allTasks.length - progress < -0.005) {
    setTimeout(() => setProgress((state) => state - 0.002), 5)
  }
  const progressAngle = progress * 360
  return (
    <div data-progress={Math.round(progress * 100)} className={styles.progress}>
      <div
        style={{
          background: `conic-gradient(var(--mainOrange) ${progressAngle}deg, var(--darkGray) ${progressAngle}deg )`,
        }}
        className={styles.outer}
      >
        <div className={styles.inner}></div>
      </div>
    </div>
  )
}
export default ProgressBar
