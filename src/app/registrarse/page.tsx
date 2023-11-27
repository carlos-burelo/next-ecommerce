import styles from "./page.module.css";

export default function home() {
  return (
    <main className={styles.main}>
      <img src="./Inicio.jpg" className="bg" />
      <h1 className={styles.tit1}>PapelApp</h1>
      <div className={styles.contenedor}>
        <h1>Crear cuenta</h1>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <input type="password" name="Pass" placeholder="Contraseña" id="" />
        <button>Crear</button>
      </div>
    </main>
  );
}
