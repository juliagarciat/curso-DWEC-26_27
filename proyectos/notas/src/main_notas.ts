import { students } from "./services/students"
import { average, isPassed } from "./utils/grades"


// const averageText = document.getElementById("average");
const averageText = document.querySelector("#average") // <-- busca
const listU = document.querySelector("#student-list")



if (!(averageText instanceof HTMLParagraphElement)) { // <-- comprueba
  throw new Error("Falta un parrafo con id average")
}

if (!(listU instanceof HTMLUListElement)) {
  throw new Error("Falta la etiqueta <ul>")
}

averageText.textContent = `Media: ${average(students).toFixed(2)}` // <-- modifica

for (const student of students) {
  const item = document.createElement("li");
  item.textContent = `Estudiante: ${student.name} --- Nota: ${student.grade}`
  item.style.color = isPassed(student) ? "green" : "red"
  listU.appendChild(item);
}

//crear un input que busque el nombre de un alumno y que me devuelva la nota
// <-- input de busqueda
const inputSearch = document.createElement("input");
inputSearch.type = "text"
inputSearch.placeholder = "Escriba nombre para buscar"
inputSearch.style.backgroundColor = "gray"
averageText.appendChild(inputSearch)

// <-- boton de enviar la busqueda
const btnSearch = document.createElement("button")
btnSearch.textContent = "🔎 Buscar"
averageText.appendChild(btnSearch)




