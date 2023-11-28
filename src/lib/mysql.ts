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
}
