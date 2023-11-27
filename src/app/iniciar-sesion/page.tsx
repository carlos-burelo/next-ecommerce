import styles from "../page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <img src="/INICIO.jpg" alt="" className="bg" />
      <div className={styles.contenedor}>
        <h1 className={styles.titulo}>Iniciar sesion</h1>
        <div className={styles.formulario}>
          <p className={styles.corre}>Correo</p>
          <div className={styles.cont}>
            <input type="text" placeholder="Correo" className={styles.correo} />
          </div>

          <p className={styles.contra}>Contraseña</p>
          <div className={styles.conta}>
            <input
              type="password"
              name="Pass"
              placeholder="Contraseña"
              id=""
              className={styles.contraseña}
            />
          </div>
          <div className={styles.bto}>
            <button className={styles.boton}>Ingresar</button>
          </div>
        </div>
      </div>
    </main>
  );
}
