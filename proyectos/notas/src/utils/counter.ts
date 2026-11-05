export function mountClickCounter(button: HTMLButtonElement, reset: HTMLButtonElement): void {
  let clicks = 0

  button.addEventListener("click", () => {
    clicks++
    button.textContent = `Click: ${clicks}`
  })

  reset.addEventListener("click", () => {
    clicks = 0
    button.textContent = `Click: ${clicks}`
  })
}

