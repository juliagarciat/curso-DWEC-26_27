// A1 · Etiquetas del blog
/**
 *  Funcion para saber las etiquetas usadas sin que se repitan
 * @param posts : string[][] Una lista con las etiquetas de cada articulo
 * @returns Descripción
 */
export function uniqueTags(posts: string[][]): string[] {
  const set = new Set(posts.flat());
  return [...set]
}

// A2 · Votación
export function firstRepeated(votes: string[]): string | undefined {

}
