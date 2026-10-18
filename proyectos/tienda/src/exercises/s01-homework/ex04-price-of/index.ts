
import type { Product } from '../../../types/product';

export function priceOf(list: Product[], id: number): number | null {
  const product = list.find((p) => p.id === id);
  if (product === undefined) {
    return null;
  }
  return product.price;
  // return product === undefined? null : product.price;
}

//Pregunta · ¿Por qué no es buena idea devolver 0 cuando el producto no existe?
//Respuesta: Porque es una respuesta confusa porque esta funcion devuelve un precio, entonces si la condicion de que el producto no exista se cumple y devuelve 0 el usuario no sabe si es que no existe o si su precio es 0.
