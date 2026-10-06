function precioFinal(precio: number, descuento: number): number | null {
  if (!Number.isFinite(precio) || !Number.isFinite(descuento)) {
    return null
  }

  if (precio < 0 || descuento < 0 || descuento > 100) {
    return null
  }

  const importeDescuento = (precio * descuento) / 100
  return precio - importeDescuento
}

export function ejercicio05(): void {
  const casos: Array<[number, number]> = [
    [80, 25],
    [0, 20],
    [80, 100],
    [-1, 10],
    [80, 120],
    [NaN, 10],
    [50, 0]
  ]

  for (const [precio, desc] of casos) {
    const resultado = precioFinal(precio, desc)
    const mensaje = resultado !== null ? `${resultado} €` : 'Datos inválidos'
    console.log(`Precio: ${precio}, Descuento: ${desc}% -> ${mensaje}`)
  }
}