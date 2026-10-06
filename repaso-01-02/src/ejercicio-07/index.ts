type Producto = {
  id: number
  nombre: string
  precio: number
  rebajado: boolean
}

const productos: Producto[] = [
  { id: 1, nombre: 'Teclado', precio: 25, rebajado: false },
  { id: 2, nombre: 'Ratón', precio: 15, rebajado: true },
  { id: 3, nombre: 'Monitor', precio: 180, rebajado: false },
  { id: 4, nombre: 'Altavoces', precio: 45, rebajado: true },
  { id: 5, nombre: 'Webcam', precio: 60, rebajado: false }
]

function etiquetasDisponibles(catalogo: Producto[]): string[] {
  return catalogo
    .filter((p) => !p.rebajado)
    .map((p) => `${p.id} · ${p.nombre} · ${p.precio} €`)
}

/*Explica por qué map por sí solo no sirve para quedarte con los no rebajados
*El map por si solo siempre devuelve un array con la misma longitud que el original, no sabe borrar
*o eliminar cosas. Si usara solamente el map dejaria huecos indefinidos y el array seguirira teneiendo 5 *elementos. Por eso se usa primero el filter para filtrar los no rebajados y luego el map para darle el formato
*a los que quedan
*/

export function ejercicio07(): void {
  console.log(etiquetasDisponibles(productos))
}