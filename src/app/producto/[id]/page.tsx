import { DB } from '@/lib/mysql'
import styles from './page.module.css'
import { redirect } from 'next/navigation'

export default async function Producto({ params }: any) {
  const id = params.id
  const producto: Producto = await DB.getProductById(id)

  return (
    <main className={styles.main}>
      <div className={styles.imagen}>
        <img src={producto.url_imagen} alt='' />
      </div>
      <h1 className={styles.titulo}>{producto.nombre}</h1>
      <div className={styles.contenedor}>
        <span className={styles.costo}>${producto.costo}</span>
        <span className={styles.cantidad}>
          Disponibles: {producto.cantidad}
        </span>
        <span className={styles.color}>Color: {producto.color}</span>
      </div>
      <div className={styles.cajabto}>
        <button>Agregar al carrito</button>
      </div>
    </main>
  )
}
