// Enunciado: Descripción del ejercicio
// Autor: Nombre y apellidos
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function soldOutNames(list: Product[]): string[] {
  //const noStock = list.filter( (p) => p.stock === 0 );
  //return noStock.map( (p) => p.name );  
  return list
    .filter((p) => p.stock === 0)
    .map((p) => p.name);
}

