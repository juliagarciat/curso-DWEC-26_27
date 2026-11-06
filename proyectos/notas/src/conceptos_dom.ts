/*
// A. - El dato

import { products } from "./services/products";

state = {products: [{id:1, name:"raton", favorite:false}]}


B. - El DOM

<ul id="lista-productos">
  <li>
    <span> Raton 19.40 </span>
    <button data-actions="favorite" data-id="1"> Favorito </button> //data es un dataset con el valor que yo quiera
    <button data-action="delete" data-id="1"> Borrar </button>
  </li>
  <li>
    <span> Teclado 25.40 </span>
    <button data-actions="favorite" data-id="2"> Favorito </button> //data es un dataset con el valor que yo quiera
    <button data-action="delete" data-id="2"> Borrar </button>
  </li>
</ul>

para añadir un data-set a un nodo u objeto del dom usamos objeto.dataset.nombre_del_dataset = "valor_del_dataset"

button.dataset.action = "favorite"
button.dataset.id = "1"


C. - El listener (escucha y colocamos casi siempre en un nodo padre que englobe a todos los hijos que quiero escuchar)


  const list = document.getElementById("lista-productos")

  list.addEventListener("click", () => {
    esto se ejercutara solo cuando se produzca el evento
  })


closest <--- Muy importante y simboliza el objeto mas proximo que tenga tal cosa... (<lo que pongo aqui es lo que busca>)

const button = xxxx.target.("button[data-action]") <--- este seria el boton pulsado
const id = Number(button.dataset.id) <--- lee data-id="el numero que he pulsado y lo convertimos a number"

if(button.dataset.action === "favorite") { leo data-action = "favorite"
  llamo a una funcion que cambia el valor que tenga ese boton. A la funcion la llamare con el nombre Dispatch
dispatch({type: "favorite", id})

la funcion dispatch coge el parametro, lo busca en mi data y le cambia el valor

function dispatch(action: Action): void {
state = reduce(state,action) <--- cambia el dato en la DATA principal
render() <--- renderizo todo con la nueva data (repintamos el nodo por pantalla)
}
}
*/

