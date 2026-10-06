// Enunciado: Ejercicio uso de arrays y tipado
// Autor: Julia GT
// Investigación: Fuentes consultadas
//

//como tipabamos un array:

const activo: boolean[] = [true, false, true, false];
const nombres: string[] = ["pepe", "luis", "carlos"];
//nueva forma:

const edades: Array<number> = [12, 4, 55, 14];

//por inferencia de tipos se puede hacer esto

const precios = [63, 3, 22];
console.log(typeof precios);

//arrays con mas de un tipo

const valores: (string | number)[] = ["Ana", 23, "Antonio", 21];

//comodo para empezar pero mejor no
const personas: [string, number] = ["Ana", 25];

//como leer los elementos de un array
console.log(nombres[0]); // <---- "pepe"
nombres[0] = "Don Pepe";

//insertar y eliminar en ultimo lugar y al comienzo del array
//para el ultimo lugar es push
//el metodo push muta el array (modifica el contenido del mismo algo prohibido en react) 
nombres.push("Sara");
//eliminamos el ultimo elemneto de un array
console.log(nombres.pop()); // <--- ademas este devuelve el nuevo array modificado
//añadir al cominzo del array
nombres.unshift("Fernando"); // <--- lo que me devuelve es la longitud del array
//eliminar del comienzo del array
nombres.shift(); // <--- lo que me devuelve es el array

//metodos que mutan y no mutan un array
//
//push(),pop(),shift(),unshift(),splice(),sort(),reverse() <--- mutan el array

// metodo slice() <--- devuelve una parte del array sin mutar el array *****
const numeros: number[] = [10, 20, 30, 40, 50];
const parte: Array<number> = numeros.slice(1, 4); // [20,30,40] <--- coge la primera posicion(1) pero no coge la ultima posicion(4) metodo splice() <--- permite eliminar, añadir o sustituir elemnetos dl array

numeros.splice(1, 2) //<--- [20,30] devuelve un array con los elemntos eliminados

//copiar Arrays Spread Operator ***********************************************
//modo dios
const num: number[] = [1, 2, 3];
//si queremos una copia de un array con ... que es spread operator
const copia: number[] = [...num]; // <--- tiene una copia con [ 1,2,3 ]
const copia2 = [...num, ...copia];

// Recorrer un array:
// for(let i = 0; i <= num.length; i++)

// for of cuando solo queremos el valor

for (const precio of precios) {
  console.log(precio)
}

// forEach() se usa mucho en React
// se usara el forEach() cada vez que queramos hacer algo con cada uno de los elemntos de un array
// se parece al map, pero el map es mas potente en muchos casos
precios.forEach((precio: number, indice: number) => {
  console.log(`Precio: ${precio ** 2} - Posición: ${indice}`)
})

// metodos que usan funciones CallBack
//
// forEach(), map(), filter(), find() <--- ***** muy importante para react
// un callback es una funcion por tanto esos metodos reciben como parametro una funcion 


