import "./style.css"
import { createCard, createTextSpan, getElement } from "./components/dom";
import { products } from "./services/products";


//const title = getElement("h1", HTMLHeadingElement)

/*const h1Product = document.createElement("h1")
h1Product.classList.add("h1Product")
h1Product.textContent = "Producto";
const divProducts = getElement("#products", HTMLDivElement)

divProducts.append(h1Product)*/

// un li con todos los productos que tengo
//

7//const ulProducts = document.createElement("ul")
/*for (const product of products) {
  const item = document.createElement("li")
  item.textContent = `Producto: ${product.name} | Precio: ${product.price} | Stock: ${product.stock}`
  ulProducts.appendChild(item)
}
divProducts.append(ulProducts)*/

const app = getElement("#products", HTMLDivElement)
const ulProducts = document.createElement("ul")

/*for (const p of products) {
  ulProducts.append(createCard(p))
}*/

//products.map(p => ulProducts.append(createCard(p)))
//ulProducts.append(...products.map(p => createCard(p))) //----- 
//     ------> las dos son lo mismo
ulProducts.append(...products.map(createCard))         //-----


//otro li con el total del precio
const liTotal = document.createElement("li")
liTotal.classList.add("card", "total")

const totalStrongText = document.createElement("strong")
totalStrongText.textContent = "Total: "
liTotal.append(totalStrongText)

const totalStrong = document.createElement("strong")
totalStrong.textContent = String(products.reduce((acc, p) => acc += p.price, 0))
totalStrong.classList.add("card-price")
liTotal.append(totalStrong)

const strongPrueba = createTextSpan("Hola Mundo", ["card-price", "total"])


ulProducts.append(liTotal)
ulProducts.append(strongPrueba)
app.append(ulProducts)

/*
 * .append              --> al final
 * .prepend             --> al principio
 * .before              --> justo antes de 
 * .after               --> justo despues de 
 * .replaceWith(nuevo)  --> en lugar de 
 * */

//creo una seccion y meto un boton

const section = document.createElement("section")
const btnCliks = document.createElement("button")
btnCliks.textContent = "Clicks: 0"
section.append(btnCliks)
const hr = document.createElement("hr")
app.append(hr)
app.append(section)


