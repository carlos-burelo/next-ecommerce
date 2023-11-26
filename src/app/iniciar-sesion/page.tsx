import styles from "../page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Iniciar sesion</h1>
      <br />
      <input type="text" placeholder="Usuario" />
      <br />
      <input type="password" name="Pass" placeholder="Contraseña" id="" />
      <br />
      <button>Ingresar</button>
    </main>
  );
}
