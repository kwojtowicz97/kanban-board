import React from 'react'
import styles from './ProgressBar.module.css'

const ProgressBar = () => {
  let progress = 0.1
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
