import { createForm, createGameItem, createList, createSearchInput, createTitle, getElement } from "./components/dom";
import { initialGames } from "./services/games";
import { loadGames, saveGames } from "./services/storage";
import type { AppState } from "./types/game";

const app = getElement("#app", HTMLDivElement);

const title = createTitle("Mis juegos");
const search = createSearchInput();
const form = createForm();
const resume = document.createElement("p");
const list = createList();

app.append(title, search, form, resume, list);

let state: AppState = {
  games: loadGames() ?? initialGames,
  search: ""
};

function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.games.filter(g =>
    g.title.trim().toLowerCase().includes(text) ||
    g.platform.trim().toLowerCase().includes(text));

  const items = visible.map(g => createGameItem(g, onTogglePlayed, onDelete));

  list.replaceChildren(...items);

  const played = state.games.filter((g) => g.played).length;
  resume.textContent = `Jugados ${played} de ${state.games.length}`;
}


function onDelete(id: number): void {
  state = { ...state, games: state.games.filter((g) => g.id !== id) };
  saveGames(state.games);
  render();
}

function onTogglePlayed(id: number): void {
  state = {
    ...state, games: state.games.map((g) => (g.id === id ? { ...g, played: !g.played } : g)),
  };
  saveGames(state.games);
  render();
}

search.addEventListener("input", () => {
  state = { ...state, search: search.value };
  render();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const title = String(data.get("title") ?? "").trim();
  const platform = String(data.get("platform") ?? "").trim();

  if (title === "") {
    return;
  }

  const newId = Math.max(0, ...state.games.map((g) => g.id)) + 1;

  state = {
    ...state,
    games: [...state.games, { id: newId, title, platform, played: false }]
  };
  saveGames(state.games);

  form.reset();
  render();
});

render();
