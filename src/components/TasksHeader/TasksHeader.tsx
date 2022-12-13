import React, { useContext } from 'react'
import styles from './TasksHeader.module.css'
import NewTaskButton from './NewTaskButton'
import ViewSelect from './ViewSelect'
import Filter from './Filter'
import {
  KanbanContext,
  sortByValues,
  TSortBy,
} from '../../providers/KanbanProvider'
import Sort from './Sort'
import { SelectField } from '../TaskCard/Form'
import FiltersPreview from './FiltersPreview'

const TasksHeader = () => {
  const {
    isListView,
    sortBy,
    setSortBy,
    setReverseSort,
    reverseSort,
    getCurrentProject,
  } = useContext(KanbanContext)

  const reverseSortHandler = () => {
    setReverseSort!((state) => !state)
  }

  const project = getCurrentProject()

  if (!project) throw new Error()

  return (
    <div className={styles.header}>
      <div className={styles.leftMenu}>
        {isListView ? (
          <>
            <div className={styles.sortWrapper}>
              <Sort reverseSort={reverseSort} onClick={reverseSortHandler} />
              <SelectField
                name='sortBy'
                onChange={(e) => {
                  setSortBy!(e.target.value as TSortBy)
                }}
                value={sortBy}
                values={Object.keys(sortByValues)}
                selectStyle={{ padding: '0.2rem', textTransform: 'capitalize' }}
                style={{ margin: '0 1rem 0 0' }}
              />
            </div>
            <Filter lists={project?.lists} />
          </>
        ) : null}
      </div>
      <FiltersPreview />
      <div className={styles.rightMenu}>
        <ViewSelect />
        <NewTaskButton />
      </div>
    </div>
  )
}

export default TasksHeader
