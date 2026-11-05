import { createTable } from "../components/tableComponent"
import { students } from "../services/students"

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

export function mountFindByClick(input: HTMLInputElement, button: HTMLButtonElement, table: HTMLDivElement, header: string[]): void {
  button.addEventListener("click", () => {
    const query = input.value.trim().toLowerCase();

    table.innerHTML = "";

    if (query === "") {
      const rows = students.map((s) => [s.name, String(s.grade)]);
      table.appendChild(createTable(header, rows, ["table"]));
      return;
    }

    const found = students.find((s) => s.name.toLowerCase() === query);

    if (found !== undefined) {
      const singleRow = [[found.name, String(found.grade)]];
      table.appendChild(createTable(header, singleRow, ["table"]));
    } else {

      alert("El usuario buscado no existe");
      const rows = students.map((s) => [s.name, String(s.grade)]);
      table.appendChild(createTable(header, rows, ["table"]));
    }
  })
}

export function mountFindByEnter(input: HTMLInputElement, table: HTMLDivElement, header: string[]): void {
  input.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      const query = input.value.trim().toLowerCase();

      table.innerHTML = ""

      if (query === "") {
        const rows = students.map(s => [s.name, String(s.grade)])
        table.appendChild(createTable(header, rows, ["table"]))
        return
      }

      const found = students.find(s => s.name.toLowerCase() === query)

      if (found !== undefined) {
        const rowFound = [[found.name, String(found.grade)]]
        table.appendChild(createTable(header, rowFound, ["table"]))
      } else {
        alert("El usuario buscado no existe")
        const rows = students.map(s => [s.name, String(s.grade)])
        table.appendChild(createTable(header, rows, ["table"]))
      }
    }
  })
}

export function mountFindWhileWriting(input: HTMLInputElement, table: HTMLDivElement, header: string[]): void {
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase()

    table.innerHTML = ""

    if (query === "") {
      const rows = students.map(s => [s.name, String(s.grade)])
      table.appendChild(createTable(header, rows, ["table"]))
      return
    }

    const found = students.filter(s => s.name.toLowerCase().includes(query))
    if (found.length > 0) {
      const rowsFiltered = found.map(s => [s.name, String(s.grade)])
      table.appendChild(createTable(header, rowsFiltered, ["table"]))
    } else {
      const allRows = students.map(s => [s.name, String(s.grade)])
      table.appendChild(createTable(header, allRows, ["table"]))
    }
  })
}
