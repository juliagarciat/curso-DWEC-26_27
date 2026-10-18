import type { Cart } from "../../../types/cart";

/**
 *  Funcion que añade un elemento al carrito
 * @param cart: Array con el carrito
 * @param productId: number el id del producto a añadir
 */
export function addToCart(cart: Cart, productId: number): Cart {
  //comprobar si el id esta
  const exists = cart.some(p => p.productId === productId);
  if (exist) {
    return cart
      .map(p => {
        return p.productId === productId ? { ...p, quantify: p.quantify + 1 } : p;
      })
  }

  return [...cart, { productId, quantify: 1 }]
}

export function removeFromCart(cart: Cart, id: number) { }

export function cartTotal() { }

