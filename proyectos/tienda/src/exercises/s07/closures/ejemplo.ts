// funcion que se le pasa un numero que devuelve si este es mator o menor que 10

//const greaterThan10 = (n: number): boolean => n >= 10;

// fabricar una funcion que pueda generar otras
// 1.- Typamos una funcion : type nombre_funcion = (parametros tipados) => Tipo_Valor_Devuelto
//

type NumberCheck = (n: number) => boolean;

function greaterThan(limit: number): NumberCheck {

  function check(n: number): boolean {

    return n >= limit
  }

  return check;
}

const greterThan_10 = greaterThan(10);
const greterThan_20 = greaterThan(20);
const greterThan_30 = greaterThan(30);

console.log(greterThan_20(40));
console.log(greterThan_10(5));
console.log(greterThan_30(25));


const numbers = [2, 5, -7, 2, 4, 1, 8, -4, 3, -9];

const greaterThan3 = greaterThan(3);
console.log(numbers.filter(greaterThan3)); // [5,4,8]

/*for(const number of numbers) {
  console.log(greaterThan_3(number));
}*/


// crear una funcion fabrica que le pase dos valores y genere verdadero o falso si el valor pedido esta entre esos dos valores sin incluir
//
// between10and20 ---> createBetween(zzzz, xxxx)
//


function between(min: number, max: number): NumberCheck {
  return (n: number): boolean => n > min && n < max;
  /*function check(n: number): boolean {
    return n > min && n < max;
  }
  return check*/
}

const between10and20 = between(10, 20);
const between30and40 = between(30, 40);

console.log(between10and20(5)); // false
console.log(between30and40(35)); // true


