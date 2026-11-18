import { createCheckbox, createForm, createList, createTitle, getElement } from "./components/dom";
import { initialRecipes } from "./services/recipes";
import type { AppState } from "./types/recipe";

const app = getElement("#app", HTMLDivElement);
const title = createTitle("Recetario");
const checkbox = createCheckbox();
const textCegetarian = document.createElement("p");
textCegetarian.textContent = "Solo vegetarianas";

const form = createForm();
const resume = document.createElement("p");
const list = createList();

app.append(title, form, checkbox, textCegetarian, resume, list);

/*let state: AppState = {
  recipes: initialRecipes,
  onlyVegetarian = false,
};*/


