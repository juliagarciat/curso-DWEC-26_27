import type { Product } from "../../../types/product";

export interface Summary {
  products: number; // cuántos productos distintos hay
  units: number; // suma del stock de todos
  value: number; // suma de price × stock de cada producto
}

export function summary(list: Product[]): Summary {
  const initial: Summary = { products: 0, units: 0, value: 0 };
  return list.reduce((total, p) => ({
    products: total.products + 1,
    units: total.units + p.stock,
    value: total.value + (p.price * p.stock)
  }), initial);
}
