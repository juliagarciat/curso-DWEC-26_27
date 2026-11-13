// test-examen-v4 · Mi biblioteca
// Empieza por src/types/book.ts (paso 1) y sigue la hoja del enunciado.
// ----- IMPORTACIONES -----
import "./style.css";
import { createBookForm, createBookItem, createList, createSearchInput, createTitle, getElement } from "./components/dom";
import { initialBooks } from "./services/books";
import type { AppState } from "./types/book";

// ----- DECLARACION DE VARIABLES-----
// · App
const app = getElement("#app", HTMLDivElement);

// · Estado
let state: AppState = {
  books: initialBooks,
  search: ""
};

// · Titulo
const title = createTitle("Mi biblioteca");

// · Search
const search = createSearchInput();

// · Formulario
const form = createBookForm();

// · Lista
const list = createList();


/*const counter = document.createElement("p");
contador.textContent = "Mostrando 10 de 10 · Favoritos: 2";*/


app.append(title, search, form, list);

// ----- FUNCIONES -----

// · Funcion de renderizado
// · Render
function render(): void {
  // calcular lo que se ve
  const text = state.search.trim().toLowerCase();

  // aqui ponemos cosas para filtrar
  const visible = state.books.filter(
    book =>
      book.title.toLowerCase().includes(text) || book.author.toLowerCase().includes(text)
  );

  //const items = visible.map((book) => createBookItem(book,toogleFavorite,deleteBook))
  const items = visible.map(book => createBookItem(book, toogleFavorite, deleteBook));


  // siempre hay que reemplazar todo el ul (replaceChildren)
  list.replaceChildren(...items);


  // aqui creamos un li por cada libro
}

render();

// · Funcion para añadir favorito
// · toogleFavorite
function toogleFavorite(id: number): void {
  state = {
    ...state,
    books: state.books.map((b) => (b.id === id ? { ...b, favorite: !b.favorite } : b))
  }
  render();
}


// · Funcion para eliminar un libro
// · deleteBook
function deleteBook(id: number): void {
  state = {
    ...state,
    books: state.books.filter(b => b.id !== id)
  }
  render();
}



