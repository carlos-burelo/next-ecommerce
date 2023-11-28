import Header from "@/components/Header";
import styles from "./page.module.css";
import ProductList from "@/components/ProductList";

interface HeaderProps {
  hideSearchBar?: boolean;
}

export default function Home({ hideSearchBar = false }) {
  return (
    <main>
      <header className={styles.header}>
        <h3 className={styles.tituloHead}>PAPELAPP</h3>
      </header>
      <h1 className={styles.titulo}>Lista de productos</h1>
      {!hideSearchBar && (
        <div className={styles.searchbar}>
          <input
            className={styles.buscar}
            type="search"
            placeholder="Buscar produtos, marcas y mucho más..."
          />
        </div>
      )}
      <section className={styles.seccion}></section>
      <ProductList />
    </main>
  );
}
