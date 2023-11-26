import Header from "@/components/Header";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.categories}>
          <div className={styles.category}></div>
          <div className={styles.category}></div>
        </div>
        <div className={styles.promoLabel}>
          <h2 className={styles.promoText}>🔥 Ofertas de la semana</h2>
        </div>
        <div className={styles.filterBar}>
          <h3 className={styles.label}>Filtrar por</h3>
          <select name="filter" id="filter">
            <option value="price">Mas relevantes</option>
            <option value="price">Mayor precio</option>
            <option value="price">Menor precio </option>
          </select>
        </div>
        <div className={styles.products}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
}
