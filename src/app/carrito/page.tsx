import Header from '@/components/Header'
import ProductTrolley from '@/components/ProductTrolley'
import styles from './page.module.css'
import Link from 'next/link'

export default function home() {
  return (
    <main className={styles.principal}>
      <header className={styles.header}>
        <Link href={`/`}>
          <h1 className={styles.titulo}>PAPELAPP</h1>
        </Link>
      </header>
      <section className={styles.seccion}>
        <ProductTrolley />
      </section>
      <div className={styles.orden}>
        <button className={styles.bto}>Ordenar</button>
      </div>
    </main>
  )
}
