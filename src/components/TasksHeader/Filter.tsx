import React, { useContext } from 'react'
import {
  KanbanContext,
  priorityColors,
  TList,
} from '../../providers/KanbanProvider'
import styles from './Filter.module.css'

type TFilterProps = {
  lists: TList[]
}

const Filter = ({ lists }: TFilterProps) => {
  const { filters } = useContext(KanbanContext)
  const listClickhandler = (list: TList) => {
    filters.setFilteredLists!((state) => {
      const stateCopy = [...state]
      if (stateCopy.includes(list.badge)) {
        return stateCopy.filter((l) => l !== list.badge)
      }
      stateCopy.push(list.badge)
      return stateCopy
    })
  }

  const priorityClickhandler = (priority: string) => {
    filters.setFilteredPriority!((state) => {
      const stateCopy = [...state]
      if (stateCopy.includes(priority)) {
        return stateCopy.filter((p) => p !== priority)
      }
      stateCopy.push(priority)
      return stateCopy
    })
  }

  const clickHandler = () => {
    filters.setIsFiltersShown!(false)
  }

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterButton}>
        <div
          onClick={() => filters.setIsFiltersShown!((state) => !state)}
          className={styles.icon}
        >
          <i className='fa-solid fa-filter'></i>
        </div>
      </div>
      {filters.isFiltersShown ? (
        <>
          <div onClick={clickHandler} className={styles.backshadow}></div>
          <div className={styles.filterSelector}>
            <div className={styles.bagdeSelector}>
              {lists.map((list) => (
                <div
                  onClick={() => listClickhandler(list)}
                  style={{ background: list.badgeColor }}
                  className={styles.bagde}
                >
                  {list.badge}
                </div>
              ))}
            </div>
            <div className={styles.datesSelector}>
              <input
                type='date'
                onChange={(e) => filters.setFilteredStartDate!(e.target.value)}
                value={filters.filteredStartDate}
              />{' '}
              -
              <input
                type='date'
                onChange={(e) => filters.setFilteredEndDate!(e.target.value)}
                value={filters.filteredEndDate}
              />
            </div>
            <div className={styles.prioritySelector}>
              {Object.entries(priorityColors).map(([priority, color]) => (
                <div style={{ background: '#ccc' }} className={styles.bagde}>
                  <div
                    onClick={() => priorityClickhandler(priority)}
                    style={{ color: color }}
                    className={styles.priority}
                  >
                    <i className='fa-solid fa-circle-exclamation'></i>{' '}
                    {priority}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Filter
