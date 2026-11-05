//main-find.ts
//label que diga usuarios
//un inpunt find-user
//un boton o el evento enter en el input
//cuando el input este vacio debajo me sale una tabla con todos los estudiantes y cuando lo busca si existe borrra toda la tabla y deja informacion de ese usuario si no existe un alert que me diga que el usuario buscado no existe
//ponemos un hr
// lo mismo productos

import { createTextSpan, getElement } from "./components/dom"

// ----- Componentes -----
const app = getElement("#find", HTMLDivElement)
const label = createTextSpan("Usuarios", [])
app.append(label)
