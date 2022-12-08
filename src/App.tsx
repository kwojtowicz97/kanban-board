import styles from './App.module.css'
import KanbanGroup from './components/KanbanGroup/KanbanGroup'
import KanbanGroupHeader from './components/KanbanGroupHeader/KanbanGroupHeader'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import NewTaskCard from './components/NewTaskCard/NewTaskCard'
import TaskPreview from './components/TaskPreview/TaskPreview'
import TopNavbar from './components/TopNavbar/TopNavbar'
import DnDProvider from './providers/DnDProvider'
import KanbanProvider from './providers/KanbanProvider'

function App() {
  return (
    <KanbanProvider>
      <div className={styles.app}>
        <div className={styles.mainLayout}>
          <LeftSidebar />
          <div className={styles.mainContent}>
            <TopNavbar />
            <KanbanGroupHeader />
            <DnDProvider>
              <KanbanGroup />
            </DnDProvider>
          </div>
        </div>
        <NewTaskCard />
        <TaskPreview />
      </div>
    </KanbanProvider>
  )
}

export default App
