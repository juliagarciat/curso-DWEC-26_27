// A1 · Etiquetas del blog
/**
 *  Funcion para saber las etiquetas usadas sin que se repitan
 * @param posts : string[][] Una lista con las etiquetas de cada articulo
 * @returns Descripción
 */
export function uniqueTags(posts: string[][]): string[] {
  const set = new Set(posts.flat());
  return [...set];
}

// A2 · Votación
export function firstRepeated(votes: string[]): string | undefined {
  const set = new Set<string>();
  for (const vote of votes) {
    if (set.has(vote)) {
      return vote;
    }
    set.add(vote);
  }
  return undefined;
}

// A3 · Canciones en las dos playlists
export function inBoth(a: string[], b: string[]): string[] {
  const set = new Set(b);
  const result = new Set<string>();
  for (const song of a) {
    if (set.has(song)) {
      result.add(song);
    }
  }
  return [...result];
}
