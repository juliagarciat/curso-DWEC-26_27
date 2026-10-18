import type { Category, Product } from "../../../types/product";

export function byCategory(list: Product[], category: Category): Product[] {
  const filterCategory = list.filter((p) => p.category === category);
  return filterCategory;
}

//Pregunta · ¿Que devuelve byCategory([], 'audio')?
//Resultado: Devuelve un array vacio --> []
//¿Da error o devuelve algo con sentido? ¿Por qué?:
// No da ningun error,ya que filter devuelve un array con los elementos que cumplan la condicion y en este array
// al no haber nada lo que te devuelve es un array con lo que ha filtrado que es nada.

