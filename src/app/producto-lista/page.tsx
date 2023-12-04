import Header from '@/components/Header'
import styles from './page.module.css'
import ProductList from '@/components/ProductList'
import { DB } from '@/lib/mysql'
import { useState } from 'react'
import Producto from '../producto/[id]/page'

interface HeaderProps {
  hideSearchBar?: boolean
}

export default async function Home({ hideSearchBar = false }) {
  const products = await DB.getProducts()

  return (
    <main>
      <header className={styles.header}>
        <h3 className={styles.tituloHead}>PAPELAPP</h3>
      </header>
      <h1 className={styles.titulo}>Lista de productos</h1>
      {!hideSearchBar && (
        <div className={styles.searchbar}>
          <input
            className={styles.buscar}
            type='search'
            placeholder='Buscar produtos, marcas y mucho más...'
          />
        </div>
      )}
      <section className={styles.seccion}></section>
      <div className={styles.products}>
        {products.map(product => (
          <ProductList {...product} key={product.id_producto} />
        ))}
      </div>
    </main>
  )
}
