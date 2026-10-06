// Enunciado: Proyecto creacion de una tienda
// Autor:Julia Garcia Torices
// Investigación: 
//
// ----- Importaciones -----
//
import type { Product } from "./types/product";
import { products } from "./data/products";


// mostrar todos los productos

console.log("Catálogo de productos TechStore", products)


//mostrar el primer producto
const first: Product | undefined = products[0];
console.log("Primer producto: ", first)


//
// mostrar del primer producto precio

console.log("Precio del primer producto: ", products[0].price)


