import { createConnection } from 'mysql2/promise'

const connection = createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
})

class ConnectionPool {
  static async query(sql: string, values?: any) {
    const x = await connection
    const [rows] = await x.execute(sql, values)
    return rows
  }
}

export class DB {
  static async getProducts() {
    const QUERY = `SELECT * FROM Producto`
    const products = await ConnectionPool.query(QUERY)
    return products as Producto[]
  }

  static async insertProduct({nombre, color, costo, categoria, marca, cantidad, url_imagen}: Partial<Producto>){
   try {
    const QUERY = `INSERT INTO Producto (nombre, color, costo, categoria, marca, cantidad, url_imagen) values (?,?,?,?,?,?,?)`
    await ConnectionPool.query(QUERY,[nombre, color, costo, categoria, marca, cantidad, url_imagen] )
    return true
   } catch (error) {
    return false
   }
  }

  static async getProductById(id: number){
    const QUERY = `SELECT * FROM producto where id_producto=?`
    const productos = await ConnectionPool.query(QUERY, [id]) as any
    return productos[0] as Producto 
  }
  

  static async updateProduct({id_producto ,nombre, color, costo, categoria, marca, cantidad, url_imagen}: Partial<Producto>){
    try {
      const QUERY = `UPDATE Producto 
      SET nombre = ?, color = ?, costo = ?, categoria = ?, marca = ?, cantidad = ?, url_imagen = ?
      WHERE id_producto = ?`;
     await ConnectionPool.query(QUERY,[nombre, color, costo, categoria, marca, cantidad, url_imagen, id_producto] )
     return true
    } catch (error) {
     return false
    }
   }

      static async insertUser({nombre, correo, contraseña}: Partial<Usuario>){
       try {
        const QUERY = `INSERT INTO Usuario (nombre, correo, contraseña) values (?,?,?)`
        await ConnectionPool.query(QUERY,[nombre, correo, contraseña])
        return true
       } catch (error) {
        return false
       }
      }

}

