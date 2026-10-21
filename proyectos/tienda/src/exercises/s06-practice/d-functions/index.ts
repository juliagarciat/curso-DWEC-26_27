// D1 · Aplicar una regla a todos los precios

export type PriceRule = (price: number) => number

export const addVat: PriceRule = (price: number) => price * 1.21

export function applyToAll(prices: number[], rule: PriceRule): number[] {
  return (prices.map(p => rule(p)));
}

// D2 · Fabrica de descuentos

export function createDiscount(percent: number): PriceRule {
  return (price: number) => price - (price * percent / 100);
}

// D3 · Ordenar peliculas

export interface Movie {
  title: string,
  year: number,
  rating: number
}

export type MovieOrder = (a: Movie, b: Movie) => number
export const byYear: MovieOrder = (a: Movie, b: Movie): number => a.year - b.year
export const byRatingDesc: MovieOrder = (a: Movie, b: Movie): number => b.rating - a.rating

export function sortMovies(movies: readonly Movie[], order: MovieOrder): string[] {
  const orderMovies = [...movies].toSorted(order)
  return orderMovies.map(m => m.title)
}




