import styles from './App.module.css'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.mainLayout}>
        <LeftSidebar />
        <div className={styles.mainContent}>
          <div className={styles.topNavbar}></div>
          <div className={styles.canbanGroup}></div>
        </div>
      </div>
    </div>
  )
}

export default App
