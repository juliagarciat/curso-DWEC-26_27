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



// ----- Inicio de la aplicación -----

app.append(createTitle("PRODUCTOS"), searchInput, list)

// Hacemos un map de cada producto <li> y usaremos replaceChildren para reemplazar todos los elemnetos que tenga la lista (list)

// * Esta seria la manera rapida para comprobar que se pinta
//list.replaceChildren(...initialProducts.map(createProductItem))

// La libreta original
interface AppState {
  products: readonly Product[];
  search: string;
}

// 1.- Estado de la libreta. (Usamos let para modificarlo:)

let state: AppState = { products: initialProducts, search: "" }

// 2.- El render de la libreta y la copia en la pantalla

function render(): void {
  const text = state.search.trim().toLowerCase()
  const visible = state.products.filter((p) => p.name.toLowerCase().includes(text))

  const items = visible.map((product) => {
    const item = createProductItem(product)
    item.querySelector("button")?.addEventListener("click", () => {
      // ahora si que cambiamos la libreta y copiamos otra vez
      state = { ...state, products: state.products.filter(p => p.id !== product.id) }
      render()
    })
    return item;
  })
  list.replaceChildren(...items)
}







