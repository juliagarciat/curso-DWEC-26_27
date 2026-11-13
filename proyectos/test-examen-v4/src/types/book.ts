//Paso 1: Tipos
// ¿Como va ser mi libro? : id, title, author, year, cover, favorite

export interface Book {
  readonly id: number;
  title: string;
  author: string;
  year: number;
  cover: string;
  favorite: boolean;
}

export interface AppState {
  books: readonly Book[];
  search: string;
}
