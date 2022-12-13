import React from 'react'

type TKanbanIconProps = {
  isListView: boolean
}

const KanbanIcon = ({ isListView }: TKanbanIconProps) => {
  return (
    <i
      style={{
        rotate: isListView ? '-90deg' : '0deg',
        // transition: '0.2s ',
        fontSize: '1.5rem',
      }}
      className='fa-solid fa-bars-staggered'
    />
  )
}

export default KanbanIcon
