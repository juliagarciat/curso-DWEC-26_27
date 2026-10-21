// Enunciado: Proyecto creacion de una tienda
// Autor:Julia Garcia Torices
// Investigación: 
//
// ----- Importaciones -----
//
import { uniqueTags } from './exercises/s06-practice/a-set';
console.log(uniqueTags([['ts', 'js'], ['js', 'css'], ['ts']]));


import { capitalOf } from './exercises/s06-practice/b-map';
import { addVat, applyToAll, byRatingDesc, byYear, createDiscount, sortMovies } from './exercises/s06-practice/d-functions';



const capitals = new Map([['Francia', 'París'], ['Italia', 'Roma']]);
console.log(capitalOf(capitals, 'Italia')); // 'La capital de Italia es Roma'
console.log(capitalOf(capitals, 'Narnia')); // 'No conozco Narnia'


console.log(applyToAll([10, 100], addVat));

console.log(applyToAll([50, 20], createDiscount(10)))
console.log(createDiscount(50), (80))

const movies = [
  { title: 'Coco', year: 2017, rating: 8.4 },
  { title: 'Up', year: 2009, rating: 8.3 },
  { title: 'Soul', year: 2020, rating: 8.0 },
];

console.log(sortMovies(movies, byYear)); // ['Up', 'Coco', 'Soul']
console.log(sortMovies(movies, byRatingDesc)); // ['Coco', 'Up', 'Soul']
console.log(movies[0].title);

