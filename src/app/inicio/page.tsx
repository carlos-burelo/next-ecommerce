import styles from "./page.module.css";
export default function Home() {
  return (
    <main>
      <img src="./Inicio.jpg" className="bg" />
      <h1 className={styles.titulo}>PAPELAPP</h1>
      <h2 className={styles.tit2}>Ven y compra los mejores productos</h2>
      <button className={styles.boton1}>Crear cuenta</button>
      <button className={styles.boton2}>Iniciar sesion</button>
      <span className={styles.Poli1}>Politicas de privacidad</span>
      <span className={styles.Poli2}>Términos y condiciones</span>
    </main>
  );
}
