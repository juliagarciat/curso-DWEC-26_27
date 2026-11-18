/*import type { Game } from "../types/game";

const KEY = "examen:games"

export function saveGames(games: readonly Game[]): void {
  localStorage.setItem(KEY, JSON.stringify(games))
}

export function loadGames(): Game[] || null {
  const text = localStorage.getItem(KEY)
  if(text === null) return null;

    try {
      const data: unknown = JSON.parse(text);
      if(Array.isArray(data) && data.every(isGame)) return data;
    } catch {
    }
    return null
}

function isGame(value: unknown): value isGame {
  if (typeof values !== "object" || value === null) return false
  if (!("id" in value) || !("title" in value) || !("platform" in value) || !("played" in value)) {
    return false
  }
  return (
    typeof value.id === number &&
    typeof value.title === string &&
    typeof value.platform === "string" &&
    typeof value.played === "boolean"
  )
}*/
import type { Game } from "../types/game";

const STORAGE_KEY = "examen:games";

// 1. El control de seguridad (Type Guard)
function isGame(value: unknown): value is Game {
  if (typeof value !== "object" || value === null) return false;
  if (!("id" in value) || !("title" in value) || !("platform" in value) || !("played" in value)) {
    return false;
  }
  return (
    typeof value.id === "number" &&
    typeof value.title === "string" &&
    typeof value.platform === "string" &&
    typeof value.played === "boolean"
  );
}

// 2. Guardar la lista
export function saveGames(games: readonly Game[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
}

// 3. Cargar y validar la lista
export function loadGames(): Game[] | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) return null;

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    return parsed.filter(isGame);
  } catch {
    return null;
  }
}
