import Image from 'next/image'
import styles from './ProductCard.module.css'

export default function ProductCard(producto: Producto) {
  return (
    <div className={styles.productCard}>
      <span className={styles.productPrice}>{producto.costo} MXN</span>
      <img src='/Jansport.png' alt='IMAGE' width={100} height={100} />
      <h3 className={styles.productName}>{producto.nombre}</h3>
    </div>
  )
}
