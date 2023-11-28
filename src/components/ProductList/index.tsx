import styles from "./ProductList.module.css";

export default function ProductList() {
  return (
    <div className={styles.productTrolley}>
      <div className={styles.cajaimagen}>
        <img src="/Jansport.png" alt="" className={styles.imagen} />
      </div>
      <div className={styles.CajaInfo}>
        <h3 className={styles.titulo}>Mochila</h3>
        <p>Marca Jansport estilo urbano</p>
        <span className={styles.canti}>Cantidad</span>
        <div className={styles.caja}>
          <p>1</p>
        </div>
      </div>
      <div className={styles.bton}>
        <button className={styles.baton}>🗑️</button>
      </div>
    </div>
  );
}
