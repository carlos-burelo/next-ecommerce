import styles from './ProductCard.module.css'

export default function ProductCard(producto: Producto) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>🖼️</div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{producto.nombre}</h3>
        <p className={styles.productShop}>
          <span className={styles.productPrice}>{producto.costo} MXN</span>
        </p>
      </div>
    </div>
  )
}
