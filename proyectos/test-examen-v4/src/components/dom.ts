import type { Book } from "../types/book";

// · Funcion 1
export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`No se encuentra ${selector} o no es del tipo esperado`);
  }
  return element;
}

// · Funcion 2
export function createTitle(text: string): HTMLHeadingElement {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
}

// · Funcion 3
export function createSearchInput(): HTMLInputElement {
  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Buscar por titulo o autor...";
  return input;
}

// · Funcion 4
export function createList(): HTMLUListElement {
  const ul = document.createElement("ul");
  ul.className = "catalog";
  return ul;
}

// · Funcion 5
export function createBookForm(): HTMLFormElement {
  const form = document.createElement("form");
  form.noValidate = true; // esto es para evitar los avisos que por defecto genera HTML5. Nosotros programaremos nuestros propios avisos

  const title = document.createElement("input");
  title.name = "title";
  title.placeholder = "Titulo";
  title.required = true;

  const author = document.createElement("input");
  author.name = "author";
  author.placeholder = "Autor";
  author.required = true;

  const year = document.createElement("input");
  year.type = "number";
  year.name = "year";
  year.placeholder = "Año";
  year.required = true;

  const btn = document.createElement("button");
  btn.type = "submit";
  btn.textContent = "Añadir";

  form.append(title, author, year, btn);
  return form;
}

// · Funcion 6
export function createBookItem(
  book: Book,
  onToggleFavorite: (id: number) => void,
  onDelete: (id: number) => void): HTMLLIElement {

  const li = document.createElement("li");

  const cover = document.createElement("img");
  cover.src = book.cover;
  cover.alt = `Portada de ${book.title}`;

  const title = document.createElement("strong");
  title.textContent = book.title;

  const details = document.createElement("span");
  details.textContent = `${book.author} · ${book.year}`;

  const btnFavorite = document.createElement("button");
  btnFavorite.type = "button";
  btnFavorite.textContent = book.favorite ? "★ Favorito" : "☆ Favorito";
  btnFavorite.addEventListener("click", () => onToggleFavorite(book.id));


  const btnDelete = document.createElement("button");
  btnDelete.type = "button";
  btnDelete.textContent = "Borrar";
  btnDelete.addEventListener("click", () => onDelete(book.id));

  li.append(cover, title, details, btnFavorite, btnDelete);
  return li;
}
