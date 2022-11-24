import React from 'react'
import styles from './ViewSelectButton.module.css'

interface IViewSelectButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  text: string
}

const ViewSelectButton = (props: IViewSelectButtonProps) => {
  const { icon, text, ...restProps } = props
  return (
    <div {...restProps}>
      <div className={styles.viewSelectButton}>
        <span className={styles.icon}>{icon}</span>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default ViewSelectButton
