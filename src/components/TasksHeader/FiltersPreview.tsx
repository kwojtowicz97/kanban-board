import React, { useContext } from 'react'
import { KanbanContext } from '../../providers/KanbanProvider'
import styles from './Filter.module.css'

const FiltersPreview = () => {
  const { filters } = useContext(KanbanContext)
  const {
    filteredLists,
    setFilteredLists,
    filteredStartDate,
    setFilteredStartDate,
    filteredEndDate,
    setFilteredEndDate,
    filteredPriority,
    setFilteredPriority,
  } = filters

  const deleteListFilterHandler = (list: string) => {
    setFilteredLists!((state) => state.filter((i) => i !== list))
  }

  const deletePriorityFilterHandler = (priority: string) => {
    setFilteredPriority!((state) => state.filter((i) => i !== priority))
  }

  return (
    <div className={styles.filtersPreview}>
      {filteredLists.map((list) => (
        <div style={{ background: '#ccc' }} className={styles.bagde}>
          {list}{' '}
          <i
            onClick={() => deleteListFilterHandler(list)}
            className={['fa-solid fa-xmark', styles.xIcon].join(' ')}
          ></i>
        </div>
      ))}
      {filteredStartDate ? (
        <div style={{ background: '#ccc' }} className={styles.bagde}>
          From: {filteredStartDate}{' '}
          <i
            onClick={() => setFilteredStartDate!('')}
            className={['fa-solid fa-xmark', styles.xIcon].join(' ')}
          ></i>
        </div>
      ) : null}
      {filteredEndDate ? (
        <div style={{ background: '#ccc' }} className={styles.bagde}>
          To: {filteredEndDate}{' '}
          <i
            onClick={() => setFilteredEndDate!('')}
            className={['fa-solid fa-xmark', styles.xIcon].join(' ')}
          ></i>
        </div>
      ) : null}
      {filteredPriority.map((priority) => (
        <div style={{ background: '#ccc' }} className={styles.bagde}>
          <i
            style={{ marginRight: '0.4rem' }}
            className='fa-solid fa-circle-exclamation'
          ></i>
          {priority}
          <i
            onClick={() => deletePriorityFilterHandler(priority)}
            className={['fa-solid fa-xmark', styles.xIcon].join(' ')}
          ></i>
        </div>
      ))}
    </div>
  )
}

export default FiltersPreview
