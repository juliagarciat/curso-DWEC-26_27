export function createFindComponent(inputText: string, cssArray: string[]): HTMLDivElement {
  const div = document.createElement("div")
  div.classList.add(...cssArray)
  const input = document.createElement("input")
  input.placeholder = inputText

  const btn = document.createElement("button")
  btn.textContent = "Buscar"

  div.appendChild(input)
  div.appendChild(btn)

  return div
}

export function createFindComponentNoButton(inputText: string, cssArray: string[]): HTMLDivElement {
  const div = document.createElement("div")
  div.classList.add(...cssArray)
  const input = document.createElement("input")
  input.placeholder = inputText
  div.appendChild(input)
  return div

}
