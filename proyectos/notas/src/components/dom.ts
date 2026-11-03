import type { Product } from "../types/product";

export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`No se encuentra el selector ${selector} o no es del tipo ${type}`)
  }
  return element;
}

export function createCard(p: Product): HTMLLIElement {
  //creo el li
  const li = document.createElement("li")
  li.classList.add("card")
  if (p.stock === 0) li.classList.add("card-sold-out")
  // creo la etiqueta name
  const name = document.createElement("span")
  name.textContent = p.name
  // etiqueta price
  const price = document.createElement("span")
  price.classList.add("card-price")
  price.textContent = `${p.price} €`

  li.append(name, price)
  return li
}

// Nivel 1 --> Ejercicio: crear una funcion que genere etiquetas con el texto que le paso como parametro y con un array de clases
export function createTextSpan(text: string, cssArray: string[]): HTMLSpanElement {
  const span = document.createElement("span")
  span.classList.add(...cssArray)
  span.textContent = text
  return span
}


// Nivel 2 --> crear un contador de clicks usando button y etiqueta

/* hecho en el dom directamente:
const section = document.createElement("section")
const btnCliks = document.createElement("button")
btnCliks.textContent = "Clicks: 0"
section.append(btnCliks)
const hr = document.createElement("hr")
app.append(hr)
app.append(section)
*/


// Nivel 3 --> crear un boton para reiniciar el contador
