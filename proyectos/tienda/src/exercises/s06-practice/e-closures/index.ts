// E1 · Turnos de la carnicería

export function createTurnDispenser(letter: string): () => string {
  let next = 0
  return String(next += 1).padStart(3, '0')
}
