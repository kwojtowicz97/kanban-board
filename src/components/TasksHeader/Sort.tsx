import styles from './Filter.module.css'

type TSortProps = {
  onClick: () => void
  reverseSort: boolean
}

const Sort = ({ onClick, reverseSort }: TSortProps) => {
  return (
    <div onClick={onClick} className={styles.filterButton}>
      <div className={styles.icon}>
        {reverseSort ? (
          <i className='fa-solid fa-arrow-down-wide-short'></i>
        ) : (
          <i className='fa-solid fa-arrow-down-short-wide'></i>
        )}
      </div>
    </div>
  )
}

export default Sort
