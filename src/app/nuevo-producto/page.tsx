import Form from '@/components/Form'
import styles from './page.module.css'
import { DB } from '@/lib/mysql'
import { redirect } from 'next/navigation'

export default function Home() {
  // prettier-ignore
  async function procesarForm(data: FormData) {
    'use server';
   const producto : Partial<Producto> = {
    nombre : data.get("nombre") as string,
    categoria : data.get("categoria") as string,
    marca : data.get("marca") as string,
    costo : parseInt(data.get("precio") as any),
    cantidad : parseInt( data.get("cantidad") as any),
    color : data.get("color") as string,
    url_imagen: data.get("url_img") as string
   }
   const resultado =  await DB.insertProduct(producto) 
   redirect("/")
   
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Nuevo Producto</h1>
      <div className={styles.contendeorM}>
        <img src='/Papeleria.jpg' alt='' />
      </div>
      <form action={procesarForm} className={styles.contenedor}>
        <span className={styles.textIm}>Imagen</span>
        <input type='text' name='url_img' />
        <span>Nombre</span>
        <input type='text' name='nombre' />
        <div className={styles.contenedor2}>
          <div className={styles.cajaInfo}>
            <span className={styles.Info1}>Categoria</span>
            <span className={styles.Info2}>Marca</span>
          </div>
          <div className={styles.cajaInput}>
            <input type='text' name='categoria' />
            <input type='text' name='marca' />
          </div>
        </div>
        <div className={styles.contenedor2}>
          <div className={styles.cajaInfo}>
            <span className={styles.Info1}>Precio</span>
            <span className={styles.Info2}>Cantidad</span>
          </div>
          <div className={styles.cajaInput}>
            <input type='number' name='precio' />
            <input type='number' name='cantidad' />
          </div>
        </div>
        <span className={styles.color}>Color</span>
        <input type='text' name='color' className={styles.colorInput} />
        <div className={styles.orden}>
          <button type='submit' className={styles.bto}>
            Agregar Producto
          </button>
        </div>
      </form>
    </main>
  )
}
