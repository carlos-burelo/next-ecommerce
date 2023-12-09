import styles from './Header.module.css'
import Link from 'next/link'

interface HeaderProps {
  hideSearchBar?: boolean
}

export default function Header({ hideSearchBar = false }) {
  return (
    <header className={styles.header}>
      <div className={styles.titlebar}>
        <Link href={`/`}>
          <h1 className={styles.title}>PAPELAPP</h1>
        </Link>
        <Link href={`/registrarse/`}>
          <p className={styles.cart}>🛒</p>
        </Link>
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
