import Header from "@/components/Header";
import ProductTrolley from "@/components/ProductTrolley";
import styles from "./page.module.css";

export default function home() {
  return (
    <main className={styles.principal}>
      <Header></Header>
      <section className={styles.seccion}>
        <ProductTrolley />
      </section>
      <div className={styles.orden}>
        <button className={styles.bto}>Ordenar</button>
      </div>
    </main>
  );
}
