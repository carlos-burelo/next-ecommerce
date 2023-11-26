import styles from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}></div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>Nombre del producto</h3>
        <p className={styles.productShop}>
          <span className={styles.productPrice}>$9.99 MXN</span>
          <button className={styles.add}>➕</button>
        </p>
      </div>
    </div>
  );
}
