import { DB } from '@/lib/mysql'

export default async function Producto({ params }: any) {
  const id = params.id
  const producto: Producto = await DB.getProductById(id)

  return <h1>{producto.nombre}</h1>
}
