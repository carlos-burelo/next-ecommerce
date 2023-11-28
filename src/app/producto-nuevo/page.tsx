import Form from "@/components/Form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Nuevo Producto</h1>
      <span className={styles.textIm}>Imagen</span>
      <div className={styles.contendeorM}>
        <img src="/Jansport.png" alt="" />
      </div>
      <section className={styles.contenedor}>
        <span>Nombre</span>
        <input type="text" />
        <Form Info1="Categoria" Info2="Marca" />
        <Form Info1="Precio" Info2="Cantidad" />
        <span className={styles.color}>Color</span>
        <input type="text" className={styles.colorInput} />
      </section>

      <div className={styles.orden}>
        <button className={styles.bto}>Agregar Producto</button>
      </div>
    </main>
  );
}
