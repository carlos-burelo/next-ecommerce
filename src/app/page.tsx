import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.principal}>
        <div className={styles.fondo}>
          <div className={styles.cajaimagen}>
            <img src="/INICIO.jpg" alt="" className={styles.imagen} />
          </div>
          <div className={styles.titulo1}>
            <h1 className={styles.titulo}>PAPELAPP</h1>
          </div>
        </div>
      </div>
      <div className={styles.prueba2}>
        <h3 className={styles.prueba}>sdn</h3>
      </div>
      <div className={styles.contenedor}>
        <h3 className={styles.subtitulo}>Ven y compra los mejores productos</h3>
        <Link className={styles.link} href="#">
          <button className={styles.registro}>Registrate</button>
        </Link>
        <Link className={styles.link} href="/iniciar-sesion">
          <button className={styles.Sesion}>Iniciar Sesion</button>
        </Link>
      </div>
    </main>
  );
}
