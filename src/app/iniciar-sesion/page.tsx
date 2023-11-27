import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <img src="/INICIO.jpg" alt="" className="bg" />
      <div className={styles.contenedor}>
        <h1 className={styles.tit1}>Iniciar sesion</h1>
        <p>Correo</p>
        <input type="text" placeholder="Correo" className={styles.correo} />
        <p>Contraseña</p>
        <input
          type="password"
          name="Pass"
          placeholder="Contraseña"
          id=""
          className={styles.contraseña}
        />
        <button>Ingresar</button>
      </div>
    </main>
  );
}
