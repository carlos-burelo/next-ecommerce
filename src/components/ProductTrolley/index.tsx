import styles from "./ProductTrolley.module.css";

export default function ProductTrolley() {
  return (
    <div className={styles.productTrolley}>
      <div className={styles.cajaimagen}>
        <img src="/Jansport.png" alt="" className={styles.imagen} />
      </div>
      <div className={styles.CajaInfo}>
        <h3 className={styles.titulo}>Mochila</h3>
        <p>
          Marca Jansport estilo urbano
          <span>Cantidad</span>
        </p>
        <div className={styles.caja}>
          <p>1</p>
        </div>
      </div>
      <div className={styles.bton}>
        <button>❌</button>
        <button>➕</button>
        <button>➖</button>
      </div>
    </div>
  );
}
