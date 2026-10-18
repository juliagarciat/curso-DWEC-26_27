import type { Product } from "../../../types/product";

export function canBuy(list: Product[], id: number, quantity: number): boolean {
  const productExist = list.find((p) => p.id === id);

  return productExist !== undefined && quantity > 0 && quantity <= productExist.stock;
}
