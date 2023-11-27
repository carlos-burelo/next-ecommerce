import styles from "./page.module.css";
export default function Home() {
  return (
    <main>
      <img src="./Inicio.jpg" className="bg" />;
      <h1 className={styles.tit2}>Ven y compra los mejores productos</h1>
      <button className={styles.boton}>Crear cuenta</button>
      <button className={styles.boton}>Iniciar sesion</button>
    </main>
  );
}
