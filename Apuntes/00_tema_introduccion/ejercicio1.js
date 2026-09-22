//Ejercicio 1 de JavaScript

console.log("Hola Mundo")
//tipos de datos en Js
//
// String y Number
// '' " "  `comillas francesas`
(La comilla francesa interpreta lo que hay dentro de ella)
//Para crear varibles de la peor a la mejor
//vpm(visible en todas partes) let(solo es visible entre comillas, corchetes..) const
let nombre = "Julia"
let apellidos = "GT"
let aniosTrabajo = 25
console.log(`Hola a tod@s, me llamo ${nombre}, ${apellidos} y llevo trabajando ${anios trabajo} años`)
console.log(typeoff(String(aniosTrabajo)))
console.log(typeoff(Number(apellidos)))

//validaciones basicas == ===

//== <--- significa si el valor de la izquierda es igual que el valor de la derecha
// === <--- significa si el valor y tipo de la izquierda coincide con el valor y tipo de la derecha

/*'a' == 'b' --> devuelve false
'5' == 5   --> devuelve true
'5' === 5  --> devuelve false*/

//ternarias evaluacion_expresion ? verdadero : falso


const edad = "23"
edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")

//Ejercicio de clase
/*Dada la edad, la hora y los minutos. Comprobar primero si la edad es un numero positivo y mayor que 18, segundo comprobar si la hora y los minutos son valores validos dentro de nuestro sistema de numeración
poner varios test edad, hora, minutos*/

const edad = 
edad > 0 && edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad") e

const hora =
hora < 24 && hora >= 0 ? console.log("Hora correcta") : console.log("Hora incorrecta")

const minutos = 
minutos > 0 && minutos < 60 ? console.log("Minutos correctos") : console.log("Minutos incorrectos")
