import type { Product } from "../../../types/product";

export function totalUnits(list: Product[]): number {
  return list.reduce((total, p) => total + p.stock, 0);
}
