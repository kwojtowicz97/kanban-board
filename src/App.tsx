import styles from './App.module.css'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import TopNavbar from './components/TopNavbar/TopNavbar'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.mainLayout}>
        <LeftSidebar />
        <div className={styles.mainContent}>
          <TopNavbar />
          <div className={styles.canbanGroup}></div>
        </div>
      </div>
    </div>
  )
}

export default App
