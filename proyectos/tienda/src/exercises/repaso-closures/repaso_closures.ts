//funcion fabrica que genere saludos
//

function generateGreeter(greeter: string): (name: string) => string {
  return (name) => `${greeter} - ${name}`
}

const morning = generateGreeter("Good morning");
const evening = generateGreeter("Good evening");

console.log(['Ana', 'Luis', 'Fernando'].map(morning));
console.log(evening("Carlos"));


// conversosr de diferentes unidades
//

function makeConverter(factor: number): (value: number) => number {
  return (value) => value * factor
}

const kmToMiles = makeConverter(0.621)
const euroToDollars = makeConverter(1.08)

console.log(kmToMiles(10).toFixed(2));
console.log(euroToDollars(150).toFixed(2));


// crear un marcador de cualquier competicion
//

/*type Xxxx {
  () => ;
  () => ;
  () => ;
}*/

function createScoreBoard(): { scoreLocal: () => void; scoreVisitor: () => void; result: () => string } {
  // declaro las variables que acumulan las puntuaciones del local y del visitor
  let local = 0;
  let visitor = 0;
  return {
    scoreLocal: () => { local += 1 },
    scoreVisitor: () => { visitor += 1 },
    result: () => `${local} - ${visitor}`
  }
}

const granadaVsMalaga = createScoreBoard()
const finalChampions = createScoreBoard()

granadaVsMalaga.scoreLocal()
granadaVsMalaga.scoreLocal()
granadaVsMalaga.scoreVisitor()

console.log(granadaVsMalaga.result)
console.log(finalChampions.result) // <--- devuelve 0-0

//para baloncesto
/*function createScoreBoard() : { scoreLocal: () => void; scoreVisitor: () => void; result: () => string } {
  // declaro las variables que acumulan las puntuaciones del local y del visitor
  let local = 0;
  let visitor = 0;
  return {
    scoreLocal : (puntos: number) => { local += puntos},
    scoreVisitor : (puntos: number) => { visitor += puntos},
    result : () => `${local} - ${visitor}`
  }
} */


