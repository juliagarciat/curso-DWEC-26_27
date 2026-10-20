/*
 * DOM --> Arbol de objetos construidos con HTML
 *
 * <html>
 *  <body>
 *    <div id="category">
 *      <h1> Titulo </h1>
 *      <input id="search" type "search" />  // formulario basico
 *      <ul id="list"></ul>                 // lista desordenada 
 *    </div>
 *  </body>
 * </html>
 *
 * document
 *  body
 *    h1
 *    div#category
 *      input#search
 *      ul#list
 *
 * Todos los elementos del dom se denominan NODOS (Node)
 * Element --> Cualquier etiqueta
 *  HTMLElement --> textContent, classList, dataset, etc
 *  HTMLInputElement --> .value, .checked, etc
 *  HTMLButtonElement --> .disabled
 *
 *  ..........
 *
 * ¿Como se seleccionan los elementos del DOM?
 * document.querySelector("#category") <--- Metodo para seleccionar por id o class
 * ***** mucho cuidado con ese query que puede devolver null | Element
 *
 * ¿Como se tipa en TypeScript?
 * - De peor forma a mejor forma
 *  
 *  --- FORMA 1: LA PEOR ---
 *  const search = document.querySelector("#search")! as HTMLInputElement;
 *  ! <--- no te preocupes, lo juro por snoopy que no es null
 *  es decir ! quita null de los posibles valores y me dice que te garantizo que existe.
 *  
 *  --- FORMA 2: MEDIA ---
 *  const search2 = document.querySelector<HTMLInputElement>("#search");
 *  un poco mejor pero sigo sin comprobar en ningun momento si es null o un HTMLInputElement
 *  
 *  --- FORMA 3: LA MEJOR ---
 *  La forma correcta es:
 *  const searchInput = document.querySelector("#search")
 *  if(! (searchInput instanceOf HTMLInputElement)){
 *    // te lanzo un error o te redirecctiono a los errores
 *    throw new Error("No se encuentra la etiqueta search o no es un input")
 *  }
 *  console.log(searchInput.value) // mostraria por pantalla lo que ha escrito en el input
 *
 */

console.log("Estoy en index.ts")

//seleccion de los elementos del dom
const searchControls = document.querySelector("#controls");
if (!(searchControls instanceof HTMLInputElement)) {
  throw new Error("No se encuentra la etiqueta search o no es un input")
}
console.log(searchControls.value);
