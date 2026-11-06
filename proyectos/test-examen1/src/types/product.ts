// vamos a exportar tipos para el producto
export interface Product {
  readonly id: number; // el id no cambia nunca
  name: string;
  price: number;
  favorite: boolean; // true si el usuario a marcado como favotito
}

export interface Newproduct {
  name: string;
  price: number;
}
