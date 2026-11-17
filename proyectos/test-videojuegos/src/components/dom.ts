import type { Game } from "../types/game";

// · Funcion getElement
export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`No se encuentra el selector ${selector} o no es del tipo ${type}`);
  }
  return element;
}

export function createTitle(text: string): HTMLHeadingElement {
  const title = document.createElement("h1");
  title.textContent = text;
  return title;
}

export function createSearchInput(): HTMLInputElement {
  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Buscar juego...";
  return input;
}

export function createForm(): HTMLFormElement {
  const form = document.createElement("form");
  form.noValidate = true;

  const inputTitle = document.createElement("input");
  inputTitle.name = "title";
  inputTitle.placeholder = "Titulo";

  const selectPlatform = document.createElement("select");
  selectPlatform.name = "platform";
  const platforms = ["PC", "Switch", "PlayStation"];

  for (const platform of platforms) {
    const option = document.createElement("option");
    option.value = platform;
    option.textContent = platform;
    selectPlatform.appendChild(option);
  }


  const btn = document.createElement("button");
  btn.type = "submit";
  btn.textContent = "Crear";

  form.append(inputTitle, selectPlatform, btn);
  return form;
}

export function createList(): HTMLUListElement {
  const ul = document.createElement("ul");
  return ul;
}

export function createGameItem(
  game: Game,
  onTogglePlayed: (id: number) => void,
  onDelete: (id: number) => void): HTMLLIElement {
  const li = document.createElement("li");

  const title = document.createElement("h3");
  title.textContent = `${game.title} (${game.platform})`;

  const btnPlayed = document.createElement("button");
  btnPlayed.type = "button";
  btnPlayed.textContent = game.played ? "Jugado" : "Pendiente";
  btnPlayed.addEventListener("click", () => onTogglePlayed(game.id));

  const btnDelete = document.createElement("button");
  btnDelete.type = "button";
  btnDelete.textContent = "Borrar";
  btnDelete.addEventListener("click", () => onDelete(game.id));

  li.append(title, btnPlayed, btnDelete);
  return li;
};
