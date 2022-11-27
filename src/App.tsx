import styles from './App.module.css'
import KanbanGroup from './components/KanbanGroup/KanbanGroup'
import KanbanGroupHeader from './components/KanbanGroupHeader/KanbanGroupHeader'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import TopNavbar from './components/TopNavbar/TopNavbar'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.mainLayout}>
        <LeftSidebar />
        <div className={styles.mainContent}>
          <TopNavbar />
          <KanbanGroupHeader />
          <KanbanGroup />
        </div>
      </div>
    </div>
  )
}

export default App
