// type de dato carrito
// Crear un type llamado CartLine que tenga el id del producto y la cantidad a comprar
// cuando es de tipo objeto se usa type, cuando es de arrays se usa interface

export interface CartLine {
  productId: number;
  quantify: number;
}

export type Cart = CartLine[];


