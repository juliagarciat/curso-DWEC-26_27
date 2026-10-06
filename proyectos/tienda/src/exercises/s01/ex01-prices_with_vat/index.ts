// Enunciado: Descripción del ejercicio
// Autor: Nombre y apellidos
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";


/** 
*
* Recibe una lista de productos y promete devolver una lista de numeros con el precio incluyendo el IVA
* */
const VAT = 0.21
export function pricesWithVat(myProducts: Product[]): number[] {
  return myProducts.map(product => Math.round(product.price * (1 + VAT)))
}

