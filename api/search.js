// api/search.js
import { DB } from '@/lib/mysql'

export default async function handler(req, res) {
  const { q } = req.query

  if (!q) {
    return res
      .status(400)
      .json({ error: 'Missing search query parameter (q).' })
  }

  try {
    const products = await DB.getProducts()
    const filteredProducts = products.filter(product =>
      product.nombre.toLowerCase().includes(q.toLowerCase())
    )

    return res.status(200).json(filteredProducts)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal server error.' })
  }
}
