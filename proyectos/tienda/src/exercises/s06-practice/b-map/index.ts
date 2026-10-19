// B1 · Goles por jugador
export function goalsByPlayer(goals: string[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const player of goals) {
    map.set(player, (map.get(player) ?? 0) + 1);
  }
  return map;
}

// B2 · Maximo goleador
export function topScorer(
  count: ReadonlyMap<string, number>,
): string | undefined {
  let topPlayer: string | undefined;
  let maxGoals = 0;
  for (const [player, goals] of count) {
    if (goals > maxGoals) {
      maxGoals = goals;
      topPlayer = player;
    }
  }
  return topPlayer;
}

// B3 · Libros por autor
export interface Book {
  title: string;
  author: string;
}

export function titlesByAuthor(books: Book[]): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const book of books) {
    const current = map.get(book.author) ?? [];
  }
  return map;
}
