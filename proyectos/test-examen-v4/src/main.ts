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

const formError = document.createElement("p");
formError.setAttribute("role", "alert");
formError.tabIndex = -1;
form.append(formError);

// · Lista
const list = createList();


const counter = document.createElement("p");



app.append(title, search, form, counter, list);

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
  const favorites = state.books.filter(book => book.favorite).length;
  counter.textContent = `Mostrando ${visible.length} de ${state.books.length} · Favoritos: ${favorites}`;

  // aqui creamos un li por cada libro
  // · Funcion para añadir favorito
  // · toogleFavorite
  function toogleFavorite(id: number): void {
    state = {
      ...state,
      books: state.books.map(b => b.id === id ? { ...b, favorite: !b.favorite } : b),
    };
    render();
  }


  // · Funcion para eliminar un libro
  // · deleteBook
  function deleteBook(id: number): void {
    state = {
      ...state,
      books: state.books.filter(b => b.id !== id),
    };
    render();
  }

}

render();

//localStorage.setItem()

// eventos

form.addEventListener("submit", (event) => {
  event.preventDefault(); // voy a parar la accion del submit por defecto
  // cogemos la data del formulario
  const data = new FormData(form);
  const title = String(data.get("title") ?? "").trim();
  const author = String(data.get("author") ?? "").trim();
  const year = Number(data.get("year"));
  console.log(title, author, year);

  if (title === "") {
    formError.textContent = "Escribe el titulo del libro";
    formError.focus();
    return;
  }

  if (author === "") {
    formError.textContent = "Escribe el autor del libro";
    formError.focus();
    return;
  }

  if (year <= 0 || !Number.isInteger(year) || year > 2026) {
    formError.textContent = "Escribe un año valido";
    formError.focus();
    return;
  }


});


