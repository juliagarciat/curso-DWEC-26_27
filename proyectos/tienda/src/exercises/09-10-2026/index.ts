// crear una funcion que me permita añadir productos a mi data
// Restricciones:
// --------------- Importaciones -----------------

import { products } from "../../data/products";
import type { Product } from "../../types/product";



// --------------- Declaracion de variables y funciones --------------------

// const copy = [...products]
const original = { name: 'teclado', price: 80 }
const other = original; // <-- asi no debo crear una copia porque la copia puede mutar el objeto
other.price = 0
console.log(original.price)
// original -------
//                 | ------- {name: 'teclado', price: 0}
// other-----------


export type NewProduct = Omit<Product, 'id'>; // **** <---- un utility type (tipo de utilidad)
// Crea un nuevo tipo de igual que product pero sin id

// Crea un fuction que me actualiza el precio de los productos, le paso id y el nuevo precio

function updatePrice(list: Product[], id: number, price: number): Product[] {
  return list
    .map((p) => {
      return p.id === id ? { ...p, price } : p // modo dios: si la clve y la varible se llaman igual en vez de poner price:price simplemente se pone price
    })
}

// actualizaciones parciales

export type ProductChanges = Partial<Omit<Product, 'id'>>;
// se lee de dentro hacia fuera ---> Quita el id de Product, y lo que queda hazlo Opcional con esto me aseguro que no voy a cambiar nunca el id

function updateProduct(list: Product[], id: number, changues: ProductChanges): Product[] {
  return list.map(p => {
    return p.id === id ? { ...p, ...changues } : p
  })
}

// updateProducts(products, 1, {stock:10, name: 'Teclado Gaming'})

// CRUD <--- C create, R read U update, D delete

function deleteProduct(list: Product[], id: number): Product[] {
  return list.filter(p => p.id !== id);
}

//ejercicio: 
//
//1.- Crear un type (cart.ts) llamado CartLine que tenga el id del producto y la cantidad a comprar, recuerda exportarlo
//
//añadir elementos del carrito
//borrar elementos del carrito
//obtener el total del carrito




// --------------- Inicio de la aplicación ---------------------

