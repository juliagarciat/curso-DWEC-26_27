import type { Recipe } from "../types/recipe";

export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`El selector ${selector} no se encuentra o no es del tipo ${type}`);
  }
  return element;
}

export function createTitle(text: string): HTMLHeadingElement {
  const title = document.createElement("h1");
  title.textContent = text;
  return title;
}

export function createCheckbox(): HTMLInputElement {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  return checkbox;
}

export function createForm(): HTMLFormElement {
  const form = document.createElement("form");
  form.noValidate = true;

  const inputName = document.createElement("input");
  inputName.name = "name";
  inputName.placeholder = "Nombre";

  const inputTime = document.createElement("input");
  inputTime.type = "number";
  inputTime.name = "minutes";
  inputTime.placeholder = "Duración";

  const inputVegetarian = document.createElement("input");
  inputVegetarian.name = "vegetarian";
  inputVegetarian.type = "checkbox";
  inputVegetarian.textContent = "Vegetariana";

  const btn = document.createElement("button");
  btn.type = "submit";
  btn.textContent = "Crear";

  form.append(inputName, inputTime, inputVegetarian, btn);
  return form;
}

export function createList(): HTMLUListElement {
  return document.createElement("ul");
}

export function createRecipeItem(
  recipe: Recipe,
  onDelete: (id: number) => void): HTMLLIElement {
  const li = document.createElement("li");

  const text = document.createElement("h3");
  text.textContent = recipe.vegetarian ? `${recipe.name} · ${recipe.minutes} min [V]` : `${recipe.name} · ${recipe.minutes} min`;

  const btnDelete = document.createElement("button");
  btnDelete.type = "button";
  btnDelete.textContent = "Borrar";
  btnDelete.addEventListener("click", () => onDelete(recipe.id));

  li.append(text, btnDelete);
  return li;
}


