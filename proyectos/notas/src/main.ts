import { getElement } from "./components/dom";
import { products } from "./services/products";


//const title = getElement("h1", HTMLHeadingElement)

const h1Product = document.createElement("h1")
h1Product.classList.add("h1Product")
h1Product.textContent = "Producto";
const divProducts = getElement("#products", HTMLDivElement)

divProducts.append(h1Product)

// un li con todos los productos que tengo
//

const ulProducts = document.createElement("ul")

for (const product of products) {
  const item = document.createElement("li")
  item.textContent = `Producto: ${product.name} | Precio: ${product.price} | Stock: ${product.stock}`
  ulProducts.appendChild(item)
}
divProducts.append(ulProducts)
