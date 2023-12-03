export declare global {
  interface Usuario {
    id_usuario: number
    nombre: string
    correo: string
  }
  interface TipoUsuario {
    id_tipo_usuario: number
    folio: number
  }
  interface Producto {
    id_producto: number
    nombre: string
    color: string
    costo: number
    id_disponibilidad: number
    id_clasificacion: number
    categoria: string
    marca: string
    url_imagen: string
    cantidad: number
  }

  interface Orden {
    id_orden: number
    id_usuario: number
    fecha: string
    total: number
  }
  interface DetalleOrden {
    id_detalle: number
    id_orden: number
    id_producto: number
    cantidad: number
    precio_unitario: number
  }
}
