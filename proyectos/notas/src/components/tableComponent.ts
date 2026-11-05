export function createTable(headerArray: string[], rowArray: string[][], cssArray: string[]): HTMLTableElement {
  const table = document.createElement("table")
  table.classList.add(...cssArray)

  const header = document.createElement("tr")
  for (const title of headerArray) {
    const th = document.createElement("th")
    th.textContent = title
    header.appendChild(th)
  }
  table.appendChild(header)

  for (const row of rowArray) {
    const tr = document.createElement("tr")
    for (const value of row) {
      const td = document.createElement("td")
      td.textContent = value
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }

  return table;
}
