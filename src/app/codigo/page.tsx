import Header from "@/components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <h1 className={styles.titulo}>PAPELAPP</h1>
      </header>
      <span className={styles.aviso}>
        La orden se ha realizado correctamente
      </span>
      <div>
        <img
          src="/Codigo.png
        "
          alt=""
        />
      </div>
      <span className={styles.aviso2}>GRACIAS POR SU PREFERENCIA</span>
      <div className={styles.orden}>
        <button className={styles.bto}>Descargar QR</button>
      </div>
    </main>
  );
}
