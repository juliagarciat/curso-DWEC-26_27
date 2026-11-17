import { createForm, createGameItem, createList, createSearchInput, createTitle, getElement } from "./components/dom";
import { initialGames } from "./services/games";
import type { AppState } from "./types/game";

const app = getElement("#app", HTMLDivElement);

const title = createTitle("Mis juegos");
const search = createSearchInput();
const form = createForm();
const resume = document.createElement("p");
const list = createList();

app.append(title, search, form, resume, list);

let state: AppState = {
  games: initialGames,
  search: ""
};

function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.games.filter(g =>
    g.title.trim().toLowerCase().includes(text) ||
    g.platform.trim().toLowerCase().includes(text));

  const items = visible.map(g => createGameItem(g, console.log, console.log));

  list.replaceChildren(...items);

  const played = visible.filter((g) => g.played);
  resume.textContent = `Jugados ${played.length} de ${visible.length}`;
}

render();
