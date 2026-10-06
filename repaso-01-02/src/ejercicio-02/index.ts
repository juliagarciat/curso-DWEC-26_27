const numeros = [7, 12, 0, -3, 8, 15, 4]

function contarParesImpares(numeros: number[]): {
  pares: number
  impares: number
} {
  let pares = 0
  let impares = 0

  for (const num of numeros) {
    const esPar = num % 2 === 0
    esPar ? pares++ : impares++
  }

  return { pares, impares }
}

export function ejercicio02(): void {
  console.log(contarParesImpares(numeros))
}