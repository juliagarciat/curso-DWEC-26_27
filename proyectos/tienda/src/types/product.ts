
// un tipo describe la forma de un dato.
export type Category = 'monitors' | 'mouse' | 'audio' | 'GPU' | 'computers' | 'peripherals';


// una interfaz es como un contrato con los valores que debe tener y el tipo. TypeScript firma el contrato y si se rompe
// se queja
// Los elementos de una interfaz van separadas por ; o enter
export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  stock: number;
}

