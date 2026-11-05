import "./style.css"
//main-find.ts
//label que diga usuarios
//un inpunt find-user
//un boton o el evento enter en el input
//cuando el input este vacio debajo me sale una tabla con todos los estudiantes y cuando lo busca si existe borrra toda la tabla y deja informacion de ese usuario si no existe un alert que me diga que el usuario buscado no existe
//ponemos un hr
// lo mismo producitos
// La version 1 es que tengas una barra de busqueda y al lado un boton para buscar y cuando le des al boton se busque lo que has puesto
// La version 2 es que solo haya una barra de busqueda y al darle al enter se busque 
// La tercera version seria que conforme lo vayas escribiendo en la barra de busqueda se busque

import { getElement } from "./components/dom";
import { createFindComponent, createFindComponentNoButton } from "./components/findComponent";
import { createTextSpan } from "./components/textSpanComponent";
import { students } from "./services/students";
import { createTable } from "./components/tableComponent";
import { mountFindByClick, mountFindByEnter, mountFindWhileWriting } from "./utils/counter";
import { createHr } from "./components/hrComponent";

// ----- Componentes -----
// ----- Estudiantes -----
const app = getElement("#students", HTMLDivElement)

// ----- Version 1 -----
app.append(createTextSpan("Parte Estudiantes", ["title"]))
app.append(createHr(["hr"]))
app.append(createTextSpan("Version 1.0", ["subtitle"]))

const searchDiv = createFindComponent("Buscar alumno", ["total"])
app.append(searchDiv)

const tableContainer = document.createElement("div")
app.append(tableContainer)

const headers = ["Nombre", "Nota"];
const rows = students.map(s => [s.name, String(s.grade)])

tableContainer.appendChild(createTable(headers, rows, ["table"]))

const input = searchDiv.querySelector("input")
const button = searchDiv.querySelector("button")

if (input instanceof HTMLInputElement && button instanceof HTMLButtonElement) {
  mountFindByClick(input, button, tableContainer, headers);
}

// Version 2
app.append(createHr(["hr"]))
app.append(createTextSpan("Version 2.0", ["subtitle"]))

const divSearch2 = createFindComponentNoButton("Buscar alumno", ["total"])
app.append(divSearch2)

const tableContainer2 = document.createElement("div")
app.append(tableContainer2)

const headers2 = ["Nombre", "Nota"]
const rows2 = students.map(s => [s.name, String(s.grade)])

tableContainer2.appendChild(createTable(headers2, rows2, ["table"]))

const input2 = divSearch2.querySelector("input")

if (input2 instanceof HTMLInputElement) {
  mountFindByEnter(input2, tableContainer2, headers2)
}

// Version 3
app.append(createHr(["hr"]))
app.append(createTextSpan("Version 3.0", ["subtitle"]))

const searchDiv3 = createFindComponentNoButton("Buscar alumno", ["total"])
app.append(searchDiv3)

const tableContainer3 = document.createElement("div")
app.append(tableContainer3)

const headers3 = ["Nombre", "Nota"]
const rows3 = students.map(s => [s.name, String(s.grade)])

searchDiv3.appendChild(createTable(headers3, rows3, ["table"]))

const input3 = searchDiv3.querySelector("input")

if (input3 instanceof HTMLInputElement) {
  mountFindWhileWriting(input3, tableContainer3, headers3)
}






