import Form from '@/components/Form'
import styles from './page.module.css'
import { DB } from '@/lib/mysql'
import { redirect } from 'next/navigation'

export default async function EditarProducto({ params }: any) {
  const id = params.id
  const producto: Producto = await DB.getProductById(id)
  // prettier-ignore
  async function procesarForm(data: FormData) {
    'use server';
   const producto : Partial<Producto> = {
    id_producto: id,
    nombre : data.get("nombre") as string,
    categoria : data.get("categoria") as string,
    marca : data.get("marca") as string,
    costo : parseInt(data.get("precio") as any),
    cantidad : parseInt( data.get("cantidad") as any),
    color : data.get("color") as string,
    url_imagen: data.get("url_img") as string,
   }
   const resultado =  await DB.updateProduct(producto) 
   redirect("/")
   
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Editar Producto</h1>
      <form action={procesarForm} className={styles.contenedor}>
        <span className={styles.textIm}>Imagen</span>
        <input type='text' name='url_img' defaultValue={producto.url_imagen} />
        <span>Nombre</span>
        <input type='text' name='nombre' defaultValue={producto.nombre} />
        <div className={styles.contenedor2}>
          <div className={styles.cajaInfo}>
            <span className={styles.Info1}>Categoria</span>
            <span className={styles.Info2}>Marca</span>
          </div>
          <div className={styles.cajaInput}>
            <input
              type='text'
              name='categoria'
              defaultValue={producto.categoria}
            />
            <input type='text' name='marca' defaultValue={producto.marca} />
          </div>
        </div>
        <div className={styles.contenedor2}>
          <div className={styles.cajaInfo}>
            <span className={styles.Info1}>Precio</span>
            <span className={styles.Info2}>Cantidad</span>
          </div>
          <div className={styles.cajaInput}>
            <input type='number' name='precio' defaultValue={producto.costo} />
            <input
              type='number'
              name='cantidad'
              defaultValue={producto.cantidad}
            />
          </div>
        </div>
        <span className={styles.color}>Color</span>
        <input
          type='text'
          name='color'
          className={styles.colorInput}
          defaultValue={producto.color}
        />
        <div className={styles.orden}>
          <button type='submit' className={styles.bto}>
            Guardar Cambios
          </button>
        </div>
      </form>
    </main>
  )
}
