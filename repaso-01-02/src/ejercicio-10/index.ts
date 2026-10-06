type Linea = {
  nombre: string
  unidades: number
  precio: number
}

const cesta: Linea[] = [
  { nombre: 'Teclado', unidades: 1, precio: 25 },
  { nombre: 'Monitor', unidades: 2, precio: 180 },
  { nombre: 'Cable', unidades: 0, precio: 8 }
]

function resumenCesta(cesta: Linea[]): {
  base: number
  conIva: number
  pendientes: number
} 

export function ejercicio10(): void {
  console.log(resumenCesta(cesta))
}