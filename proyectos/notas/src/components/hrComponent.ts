export function createHr(cssArray: string[]): HTMLHRElement {
  const newHr = document.createElement("hr");
  newHr.classList.add(...cssArray)
  return newHr;
}
