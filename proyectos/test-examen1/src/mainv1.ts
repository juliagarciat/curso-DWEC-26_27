import './style.css'
import { createList, createProductItem, createSearchInput, createTitle, getElement } from './components/dom'
import { initialProducts } from './services/products'
import type { Product } from './types/product'

// ----- Declaracion de variables -----

const app = getElement("#app", HTMLDivElement)

//const miNombre = createTitle("Julia GT")
const searchInput = createSearchInput()
const list = createList()


// ----- Declaracion de funciones -----

// * Esta seria modo dios
//pintar los productos que reciba
function paint(products: readonly Product[]): void {
  const items = products.map((product) => {
    const item = createProductItem(product)
    return item
  })
  list.replaceChildren(...items)
}

// funcion que se ejecuta con cada pulsacion de tecla que le de
searchInput.addEventListener("input", () => {
  const text = searchInput.value.trim().toLowerCase()

  paint(initialProducts.filter((p) => p.name.toLowerCase().includes(text)))
})

paint(initialProducts)




// ----- Inicio de la aplicación -----

app.append(createTitle("PRODUCTOS"), searchInput, list)

// Hacemos un map de cada producto <li> y usaremos replaceChildren para reemplazar todos los elemnetos que tenga la lista (list)

// * Esta seria la manera rapida para comprobar que se pinta
//list.replaceChildren(...initialProducts.map(createProductItem))






