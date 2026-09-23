//funcion que le pase como parametro un numero en grados celsius y lo transforme a grados kelvin.

//version 1, una basura, demasiado verboso
function celsiusToKelvin1(celsius) {
    let kelvin = celsius + 273.15
    return celsius
}

//version 2, priorizamos menor numero de lineas
function celsiusToKelvin2(celsius) {
    return celsius + 273, 15
}

//tryhard edition, usamos arrow function
const celToKel = (celsius) => {
    return celsius + 273.15
}

//full tryhard edition, arrow function pro max
const cToK = (c) => c + 273.15

//funcion que le pase como parámetro 2 números y me los ordene

//funcion que pase de celsius a kelvin, pero comprobando que celsius es un numero, que la temperatura no puede estar por debajo del 0 absoluto, y que el resultado me lo das con sólo 2 cifra decimal
//isNaN -> is Not a Number
//buscar como truncar un numero a 2 decimales 
