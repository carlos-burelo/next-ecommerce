import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.principal}></div>
      <div className={styles.titulo1}>
        <h1 className={styles.titulo}>PAPELAPP</h1>
      </div>
      <div className={styles.contenedor}>
        <h3 className={styles.subtitulo}>Ven y compra los mejores productos</h3>
        <button className={styles.registro}>Registrate</button>
        <button className={styles.Sesion}>Iniciar Sesion</button>
      </div>
    </main>
  );
}
