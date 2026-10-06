// Enunciado: Ejercicios repaso de metodos de los arrays
// Autor: Julia GT
// Investigación: Fuentes consultadas
//

// ------- declaracion de varibles -------------
const notas: number[] = [6, 8, 4, 9, 7];

// ----------- declaracion de funciones --------------
//
/**
 *  Funcion que muestra el valor de las notas pasadas como parametro
 * @param notes Descripción
 */
// funcion que muestre todas las notas
function showNotes(notes: number[]): void {
  // console.log(notes)
  for (const note of notes) {
    console.log(" ", note)
  }

  // notes.forEach( (note:number) => console.log(" ", note) )
  // console.log(...notes) <-- para verificar
}

//funcion que calcule la media de las notas
//
//funcion que muestra la mayor nota y la posicion de esa nota
/**
 * Una funcion que devuelve la nota mas alta del array y la posicion de esta
 * @param notes Descripción
 */
function getHighestMark(notes: number[]): void {
  let highest = 0;
  for (const note of notes) {
    if (note > highest) {
      highest = note;
    }
  }

  console.log("La nota mas alta es: ", highest);
  console.log("La posicion de esta nota es: ", notes[highest]);
}

//funcion que calcule la mediana de las notas



//funcion que devuelva un array con notas junto con la nota pasada como parametro
/**
 *  Una funcion que devuelve un array con la nota añadida que se le pasa como parametro
 * @param note Descripción
 */
function returnArray(note: number): void {
  const arrayCopy = [...notas];
  arrayCopy.push(note);
  console.log(arrayCopy);
}

//funcion que elimina una nota, recibe el array notas y como segundo parametro 1 o -1, si es 1, elimina la primera posicion del array y devuelve una copia, si es -1 elimina la ultima posicion del array devuelve una copia. No mutamos el array del parametro ojo y lo demostramos haciendo un clg del array del parametro para asegurar que no lo hemos mutado

function removeMark(notes: number[], posicion: number = 1 | -1) {
  const arrayCopy = [...notas];
  if (posicion === 1) {
    const arrayCopy2 = [...arrayCopy];
    console.log(arrayCopy2.shift());
    console.log("Demostracion de no mutar el array: ", arrayCopy);
  } else if (posicion === -1) {
    const arrayCopy3 = [...arrayCopy];
    console.log(arrayCopy3.pop());
    console.log("Demostracion de no mutar el array: ", arrayCopy);
  }
}


/**
 *  Descripción de la función
 * @param numero Descripción
 */
function miFuncion(numero: number): void {
}

// ----------- funcion de ejecucion -------------
export function ejercicio2(): void {
  showNotes(notas);
}
