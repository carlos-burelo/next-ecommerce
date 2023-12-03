import Image from 'next/image'
import styles from './ProductCard.module.css'
import Link from 'next/link'

export default function ProductCard(producto: Producto) {
  return (
    <Link href={`/producto/${producto.id_producto}`}>
      <div className={styles.productCard}>
        <span className={styles.productPrice}>{producto.costo} MXN</span>
        <img src={producto.url_imagen} alt='IMAGE' width={100} height={100} />
        <h3 className={styles.productName}>{producto.nombre}</h3>
      </div>
    </Link>
  )
}
