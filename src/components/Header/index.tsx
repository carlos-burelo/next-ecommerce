import styles from './Header.module.css'

interface HeaderProps {
  hideSearchBar?: boolean
}

export default function Header({ hideSearchBar = false }) {
  return (
    <header className={styles.header}>
      <div className={styles.titlebar}>
        <h1 className={styles.title}>PAPELAPP</h1>
        <p className={styles.cart}>🛒</p>
      </div>
      {!hideSearchBar && (
        <div className={styles.searchbar}>
          <input
            type='search'
            placeholder='Buscar produtos, marcas y mucho más...'
          />
        </div>
      )}
    </header>
  )
}
