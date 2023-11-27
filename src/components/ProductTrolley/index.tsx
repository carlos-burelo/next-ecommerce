import styles from "./ProductTrolley.module.css";

export default function ProductTrolley() {
  return (
    <div className={styles.productTrolley}>
      <div className={styles.s}>
        <img src="/Jansport.png" alt="" className={styles.imagen} />
      </div>
      <div className={styles.CajaInfo}>
        <h3>Mochila</h3>
        <p>
          Marca Jansport estilo urbano
          <span>$250</span>
        </p>
      </div>
    </div>
  );
}
