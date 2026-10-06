const entradas = ['7', '4.5', '9', '3', '5.5', 'hola']

function mediaNotas(entradas: string[]): {
  validas: number
  media: string | null
} {
  let validas = 0
  let suma = 0

for (const entrada of entradas) {
  const num = Number(entrada)

  if (entrada.trim() !== '' && Number.isFinite(num) && num >= 0 && num <= 10) {
    validas++
    suma += num
  }
}

  const mediaFinal = validas > 0 ? (suma / validas) : null

  return {
    validas,
    media: mediaFinal
  }
}

export function ejercicio08(): void {
  console.log(mediaNotas(entradas))
  console.log(mediaNotas(['11', '-1', 'x']))
  console.log(mediaNotas([]))
  console.log(mediaNotas(['10', '0']))
}