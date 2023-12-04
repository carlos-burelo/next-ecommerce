import { DB } from '@/lib/mysql'
import styles from './page.module.css'

export default function home() {
  // prettier-ignore
  async function procesarForm(data : FormData){
    'use server';
    const usuario: Partial<Usuario> = {
      nombre : data.get("nombre") as string,
      correo : data.get("correo") as string,
      contraseña : data.get("contraseña") as string
    }
    const resultado = await DB.insertUser(usuario)
    
  }

  return (
    <main className={styles.main}>
      <img src='./Inicio.jpg' className='bg' />
      <h1 className={styles.tit1}>PapelApp</h1>
      <form action={procesarForm} className={styles.contenedor}>
        <h1>Crear cuenta</h1>
        <input type='text' placeholder='Nombre' name='nombre' />
        <input type='email' placeholder='Correo' name='correo' />
        <input
          type='password'
          name='contraseña'
          placeholder='Contraseña'
          id=''
        />
        <button type='submit' className={styles.boton}>
          Crear
        </button>
      </form>
    </main>
  )
}
