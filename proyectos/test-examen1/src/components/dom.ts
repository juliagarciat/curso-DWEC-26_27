import type { Product } from "../types/product"

// funcion que comprueba si existe y es del tipo pedido
export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector)
  if (!(element instanceof type)) {
    throw new Error("Error en el selector de tipos")
  }
  return element
}

// · Componente-1: recibe un texto y devuelve un <h1>
export function createTitle(text: string): HTMLHeadingElement {
  const title = document.createElement("h1")
  title.textContent = text
  return title
}

// · Componente-2: buscador
export function createSearchInput(): HTMLInputElement {
  const input = document.createElement("input")
  input.type = "search"
  input.placeholder = "🔎 Buscar Producto"
  return input
}

// · Componente-3: un ul vacio
export function createList(): HTMLUListElement {
  return document.createElement("ul")
}

// · Componente-4: Recibe un producto y devuelve su li bonito
export function createProductItem(product: Product): HTMLLIElement {
  const item = document.createElement("li")

  const text = document.createElement("span")
  text.textContent = `${product.name} --- ${product.price.toFixed(2)} €`

  const button = document.createElement("button")
  button.type = "button"
  button.textContent = "Borrar"

  item.append(text, button)
  return item
}


