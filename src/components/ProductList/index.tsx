import styles from './ProductList.module.css'

export default function ProductList(producto: Producto) {
  return (
    <div className={styles.productTrolley}>
      <div className={styles.cajaimagen}>
        <img src={producto.url_imagen} alt='' className={styles.imagen} />
      </div>
      <div className={styles.CajaInfo}>
        <h3 className={styles.titulo}>{producto.nombre}</h3>
        <p>
          {producto.marca} {producto.color}
        </p>

        <div className={styles.caja}>
          <p>{producto.cantidad}</p>
        </div>
      </div>
      <div className={styles.bton}>
        <button className={styles.baton}>🗑️</button>
      </div>
    </div>
  )
}
