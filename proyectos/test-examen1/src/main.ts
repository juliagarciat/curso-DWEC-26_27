import './style.css';
import { createFooter, createList, createProductItem, createSearchInput, createTitle, getElement } from './components/dom';
import { initialProducts } from './services/products';
import type { Product } from './types/product';

// ----- Declaracion de variables -----

const app = getElement("#app", HTMLDivElement);

//const miNombre = createTitle("Julia GT")
const searchInput = createSearchInput();
const list = createList();
const footer = createFooter("Julia GT");


// ----- Declaracion de funciones -----



// ----- Inicio de la aplicación -----


app.append(createTitle("PRODUCTOS"), searchInput, list);

// Hacemos un map de cada producto <li> y usaremos replaceChildren para reemplazar todos los elemnetos que tenga la lista (list)

// * Esta seria la manera rapida para comprobar que se pinta
//list.replaceChildren(...initialProducts.map(createProductItem))

// La libreta original
interface AppState {
  products: readonly Product[];
  search: string;
}

// 1.- Estado de la libreta. (Usamos let para modificarlo:)

let state: AppState = { products: initialProducts, search: "" };

// 2.- El render de la libreta y la copia en la pantalla

function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.products.filter((p) => p.name.toLowerCase().includes(text));

  const items = visible.map((product) => {
    const item = createProductItem(product);
    item.querySelector("button")?.addEventListener("click", () => {
      // ahora si que cambiamos la libreta y copiamos otra vez
      state = {
        ...state,
        products: state.products.filter(p => p.id !== product.id)
      };
      render();
    });

    item.querySelector("buttonFav")?.addEventListener("click", () => {
      state = {
        ...state,
        products: state.products.map(p => p.id === product.id ? { ...p, favorite: !p.favorite } : p)
      };
      render();
    });





    return item;
  });
  list.replaceChildren(...items);
}

searchInput.addEventListener("input", () => {
  state = { ...state, search: searchInput.value.trim().toLowerCase() };
  render();
});





render();

const ahora = new Date();
ahora.toLocaleTimeString;
app.append(createFooter(`Julia GT | ${ahora}`));



/*
 *
 1. Tipos ¿como es?
 2.Datos ¿con que empieza?
 3.Componentes ¿como se dibuja una? --> dom
 4.Estado ¿que puede cambiar?
 5.render() estado-->pantalla
 6.Eventos

 posibles cosas que pueden caer en el examen: peliculas, retaurante, libros, incidencias-taller, videojuegos PS4

 cuando yo quiero quitar un elemento --> list.filter(x => x.id !== id)
 cambiar 1 elemento --> list.map(x => x.id === id? {...x, sudadera: roja} : x)
 añadir 1 --> [...list, nuevo elemento]
 */






